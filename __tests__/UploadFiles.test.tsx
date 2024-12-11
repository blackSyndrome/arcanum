import { handleUploadIdentficationRegistration } from "../database-methods/crud-identification/handle-create-identification";
import { createClient } from "../utils/supabase/client";

jest.mock("../utils/supabase/client", () => ({
  createClient: jest.fn(),
}));

describe("handleUploadIdentificationRegistration", () => {
  const mockUpload = jest.fn();
  const mockFrom = jest.fn().mockReturnValue({ upload: mockUpload });

  beforeEach(() => {
    (createClient as jest.Mock).mockReturnValue({
      storage: {
        from: mockFrom,
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("uploads an image successfully", async () => {
    const mockData = { path: "registration-identification/sample-image.png" };
    mockUpload.mockResolvedValueOnce({ data: mockData, error: null });

    const imageName = "sample-image.png";
    const mockFile = new File(["sample content"], imageName, { type: "image/png" });

    const result = await handleUploadIdentficationRegistration(imageName, mockFile);

    expect(createClient).toHaveBeenCalled();
    expect(mockFrom).toHaveBeenCalledWith("user-identification");
    expect(mockUpload).toHaveBeenCalledWith(`registration-identification/${imageName}`, mockFile);
    expect(result.data).toEqual(mockData);
    expect(result.error).toBeNull();
  });

  it("handles upload error", async () => {
    const mockError = { message: "Upload failed" };
    mockUpload.mockResolvedValueOnce({ data: null, error: mockError });

    const imageName = "sample-image.png";
    const mockFile = new File(["sample content"], imageName, { type: "image/png" });

    const result = await handleUploadIdentficationRegistration(imageName, mockFile);

    expect(createClient).toHaveBeenCalled();
    expect(mockFrom).toHaveBeenCalledWith("user-identification");
    expect(mockUpload).toHaveBeenCalledWith(`registration-identification/${imageName}`, mockFile);
    expect(result.data).toBeNull();
    expect(result.error).toEqual(mockError);
  });

  it("handles network error", async () => {
    mockUpload.mockRejectedValueOnce(new Error("Network error"));

    const imageName = "sample-image.png";
    const mockFile = new File(["sample content"], imageName, { type: "image/png" });

    await expect(handleUploadIdentficationRegistration(imageName, mockFile)).rejects.toThrow("Network error");

    expect(createClient).toHaveBeenCalled();
    expect(mockFrom).toHaveBeenCalledWith("user-identification");
    expect(mockUpload).toHaveBeenCalledWith(`registration-identification/${imageName}`, mockFile);
  });


  it("handles storage quota limit error", async () => {
    const mockError = { message: "Storage quota exceeded" };
    mockUpload.mockResolvedValueOnce({ data: null, error: mockError });

    const imageName = "sample-image.png";
    const mockFile = new File(["sample content"], imageName, { type: "image/png" });

    const result = await handleUploadIdentficationRegistration(imageName, mockFile);

    expect(createClient).toHaveBeenCalled();
    expect(mockFrom).toHaveBeenCalledWith("user-identification");
    expect(mockUpload).toHaveBeenCalledWith(`registration-identification/${imageName}`, mockFile);
    expect(result.data).toBeNull();
    expect(result.error).toEqual(mockError);
  });
});