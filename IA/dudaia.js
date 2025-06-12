const baseConhecimentoDudinha = [
  {
    intencao: "apresentacao",
    palavras_chave: ["o que é", "sobre", "studyvr", "projeto", "realidade virtual", "que projeto", "fala do projeto", "explica o studyvr"],
    resposta: "O StudyVR é um projeto educacional que utiliza realidade virtual para transformar a forma como os alunos aprendem nas escolas."
  },
  {
    intencao: "cumprimento",
    palavras_chave: ["oi", "ou", "olá", "e aí", "eae", "fala aí", "opa", "bom dia", "boa tarde", "boa noite", "salve", "fala comigo", "yo", "ae"],
    resposta: "Olá! Eu sou a Duda, sua assistente virtual. Como posso ajudar?"
  },
  {
    intencao: "cumprimento2",
    palavras_chave: ["tudo bem", "como vai", "tranquilo?", "de boa?", "beleza?", "tudo certo?", "tudo okay", "suave?", "na paz?", "sussa?"],
    resposta: "Tudo bem, e você como vai? No que posso ajudar?"
  },
  {
    intencao: "funcionalidades",
    palavras_chave: ["como funciona", "funcionalidades", "recursos", "tecnologia", "pra que serve", "o que faz", "faz o que", "como que é"],
    resposta: "O StudyVR oferece experiências imersivas em salas de aula com óculos de realidade virtual e conteúdo didático interativo."
  },
  {
    intencao: "demonstração",
    palavras_chave: ["demonstração", "ver", "exemplo", "teste", "mostra aí", "tem demo", "tem amostra", "quero ver", "tem vídeo"],
    resposta: "Infelizmente no momento não temos demonstrações no site. Mas, se quiser podemos agendar uma visita de demonstração do Study, basta nos contactar na página de contato."
  },
  {
    intencao: "contato",
    palavras_chave: ["contato", "falar", "email", "suporte", "como falar", "quero falar", "fala com vocês", "atendimento", "sac"],
    resposta: "Você pode entrar em contato pelo email contato@studyvr.com ou através do nosso formulário na página de contato."
  },
  {
    intencao: "escolas_parceiras",
    palavras_chave: ["escolas", "escola", "parceiras", "instituições", "quem usa", "quem já usa", "parcerias", "onde tem", "quem tem"],
    resposta: "Temos escolas parceiras como a Excola XYZ, Laerte Ramos, Certus, e muitas outras..."
  },
  {
    intencao: "requisitos_tecnicos",
    palavras_chave: ["precisa de internet", "funciona em", "requisitos", "funciona com", "compatível", "roda em que", "precisa de quê", "qual aparelho", "que precisa"],
    resposta: "O StudyVR funciona em dispositivos compatíveis com realidade virtual e requer acesso à internet para conteúdos online."
  },
  {
    intencao: "agradecimento",
    palavras_chave: ["obrigado", "valeu", "agradeço", "obg", "brigadão", "vlw", "show", "top", "tamo junto"],
    resposta: "Fico feliz em ajudar! Se tiver mais dúvidas, é só perguntar. 😊"
  }, 

  {
  intencao: "experiencias_materias",
  palavras_chave: ["história", "matemática", "tem conteúdo de", "experiências de", "dá pra estudar", "tem aula de", "tem matéria de"],
  resposta: "O StudyVR oferece experiências interativas em diversas áreas do conhecimento como História, Matemática, Ciências e muito mais."
},
{
  intencao: "como_participar",
  palavras_chave: ["como participar", "minha escola pode", "como usa", "como minha escola entra", "quero usar na escola", "quero participar", "quero na escola"],
  resposta: "Sua escola pode participar entrando em contato conosco! Basta acessar a página de contato no site ou enviar um email para contato@studyvr.com."
},
{
  intencao: "parcerias_publicas",
  palavras_chave: ["escola pública", "parceria pública", "escolas públicas", "trabalha com escola pública", "aceita pública"],
  resposta: "O StudyVR está aberto a parcerias com escolas públicas e privadas! Entre em contato para saber mais sobre como trazer essa tecnologia para sua instituição."
},
{
  intencao: "agendar_demonstracao",
  palavras_chave: ["agendar demonstração", "ver demonstração", "quero ver", "como agendar", "teste do sistema", "testar"],
  resposta: "Claro! Para agendar uma demonstração do StudyVR, basta nos mandar uma mensagem pela página de contato ou pelo email. Teremos prazer em mostrar como funciona."
},
{
  intencao: "preco",
  palavras_chave: ["quanto custa", "valor", "preço", "é caro", "quanto é", "tem mensalidade"],
  resposta: "O investimento inicial para escolas varia a partir de R$ 1.200,00, dependendo do número de licenças e kits VR. Entre em contato para um orçamento personalizado."
},
{
  intencao: "quem_e_voce",
  palavras_chave: ["quem é você", "quem é duda", "quem tá falando", "quem tá aí", "quem é essa ia"],
  resposta: "Eu sou a Duda, uma assistente virtual criada para te ajudar a entender tudo sobre o StudyVR!"
},
{
  intencao: "voce_e_ia",
  palavras_chave: ["você é uma ia", "você é real", "você é um robô", "você é programada", "você é inteligente artificial", "você é tipo chatgpt"],
  resposta: "Sim! Sou uma inteligência artificial desenvolvida especialmente para o StudyVR. Estou aqui para tirar suas dúvidas. 😊"
},
{
  intencao: "ia_aprende",
  palavras_chave: ["você aprende", "você vai aprendendo", "você lembra do que falo", "aprende com conversa", "você evolui", "vai melhorando?"],
  resposta: "No momento, eu respondo com base em um conjunto de conhecimentos programado, mas futuramente poderei evoluir com base nas interações dos usuários!"
}

];

function normalizarTexto(texto) {
  const substituicoes = {
    "vc": "você",
    "voce": "você",
    "td": "tudo",
    "blz": "beleza",
    "vlw": "valeu",
    "obg": "obrigado",
    "eh": "é",
    "q": "que",
    "pq": "por que",
    "tb": "também",
    "tmj": "estamos juntos",
    "iae": "e aí",
    "eae": "e aí",
    "ae": "e aí"
  };

  let textoNormalizado = texto.toLowerCase();
  for (const [chave, valor] of Object.entries(substituicoes)) {
    const regex = new RegExp(`\\b${chave}\\b`, "g");
    textoNormalizado = textoNormalizado.replace(regex, valor);
  }
  return textoNormalizado;
}


function responderDuda(perguntaUsuario) {
  const perguntaNormalizada = normalizarTexto(perguntaUsuario.toLowerCase());
  for (const item of baseConhecimentoDudinha) {
    for (const palavra of item.palavras_chave) {
      if (perguntaNormalizada.includes(palavra)) {
        return item.resposta;
      }
    }
  }
  return "Desculpe, ainda estou aprendendo e não entendi sua pergunta. Você pode reformular?";
}

function sendMessage(event) {
  if (event) event.preventDefault();
  const input = document.getElementById("user-input");
  const pergunta = input.value.trim();
  if (!pergunta) return;

  adicionarMensagem("Usuário", pergunta);

  const resposta = responderDuda(pergunta);
  setTimeout(() => {
    adicionarMensagem("Duda", resposta);
  }, 500);

  input.value = "";
}

function adicionarMensagem(remetente, texto) {
  const chat = document.getElementById("chat-messages");
  const novaMensagem = document.createElement("div");
  novaMensagem.classList.add("message");
  novaMensagem.classList.add(remetente === "Duda" ? "bot" : "user");
  novaMensagem.innerText = texto;
  chat.appendChild(novaMensagem);
  chat.scrollTop = chat.scrollHeight;
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    sendMessage(event);
  }
}
