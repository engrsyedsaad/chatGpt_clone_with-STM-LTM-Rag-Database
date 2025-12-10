const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({});

async function generateResponse(contents) {
  try {
    // Handle both string and array inputs
    let formattedContents = contents
    
    if (typeof contents === 'string') {
      formattedContents = [{
        role: "user",
        parts: [{ text: contents }]
      }]
    }
    
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: formattedContents,
    })
    
    return response.text
  } catch (err) {
    console.error("AI Generation Error:", err)
    throw err
  }
}


async function generateVector(prompt){
  try {
    const response = await ai.models.embedContent({
          model: 'gemini-embedding-001',
          contents: prompt,
          config:{
            outputDimensionality: 768
          }
      })

      return response.embeddings[0].values
  } catch (err) {
    console.error("Vector Generation Error:", err)
    throw err
  }
}

module.exports ={
  generateResponse,
  generateVector
}
