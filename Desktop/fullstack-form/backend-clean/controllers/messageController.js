const generateGeminiResponse = require("../config/gemini");

exports.improveMessage = async (req, res) => {
  let { message, tone } = req.body;

  if (!message || !tone) {
    return res.status(400).json({ error: "Message and tone are required." });
  }

  // Optional: Sanitize message input
  message = message.trim();

  const prompt = `
You are a professional communication assistant helping freelancers talk to clients clearly and effectively.

🎯 Your task:
Rewrite the client's message in a professional and ${tone} tone.

📝 Requirements:
- Use short, clean, and polite sentences.
- Each sentence must be on a **new line**.
- Avoid overly complex or robotic language.
- Keep the formatting tidy and business-appropriate.
- The final version should be ready to copy-paste as a message to a client.

📩 Original Message:
"""
${message}
"""

✅ Improved Message (each sentence on a new line):
`;

  try {
    const reply = await generateGeminiResponse(prompt);

    // Optional: Log full response if debugging
    // console.log("Gemini response:", reply);

    res.status(200).json({ reply });
  } catch (error) {
    console.error("Gemini API Error:", error?.message || error);
    res.status(500).json({
      error: "Failed to generate response. Please try again later.",
    });
  }
};
