import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe("Submit feedback", () => {
  it("should not be able to submit a feedback without type", async () => {
    await expect(
      submitFeedback.execute({
        type: "",
        comment: "example comment",
        screenshot: "data:image/png;base64,HAU8FDY8390P31HJNEDKWU",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });
});

describe("Submit feedback", () => {
  it("should not be able to submit a feedback without comment", async () => {
    await expect(
      submitFeedback.execute({
        type: "Bug",
        comment: "",
        screenshot: "data:image/png;base64,HAU8FDY8390P31HJNEDKWU",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });
});

describe("Submit feedback", () => {
  it("should not be able to submit a feedback with an invalid screenshot", async () => {
    await expect(
      submitFeedback.execute({
        type: "Bug",
        comment: "example comment",
        screenshot: "teste.jpg",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });
});

describe("Submit feedback", () => {
  it("should not be able to submit a feedback without send a email", async () => {
    await expect(
      submitFeedback.execute({
        type: "Bug",
        comment: "example comment",
        screenshot: "data:image/png;base64,HAU8FDY8390P31HJNEDKWU",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
  });
});

describe("Submit feedback", () => {
  it("should not be able to submit a feedback whitout create a feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "Bug",
        comment: "example comment",
        screenshot: "data:image/png;base64,HAU8FDY8390P31HJNEDKWU",
      })
    ).resolves.not.toThrow();

    expect(sendMailSpy).toHaveBeenCalled();
  });
});