export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white px-6 py-10 flex flex-col items-center justify-center">
      <div className="max-w-4xl text-center space-y-8">
        {/* Header com imagem do token */}
        <div className="space-y-4">
          <div className="flex flex-col items-center gap-4">
            <img 
              src="https://gateway.pinata.cloud/ipfs/bafkreifwuo5wd5x2liwbkeklcguw4t63cjbuu3jqf47om22uoqqwjypdm4" 
              alt="Token PRV"
              className="h-32 w-32 animate-float rounded-full border-4 border-yellow-400/50 shadow-xl"
              style={{boxShadow: '0 0 20px rgba(250, 204, 21, 0.3)'}}
            />
            <div className="flex items-center gap-3">
              <img src="/solana-logo.svg" alt="Solana" className="h-6" />
              <span className="bg-white/10 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Verificado pela Solscan
              </span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Seu Primeiro Passo na Nova Economia Digital
            <br />
            <span className="text-yellow-400">A partir de R$10</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Mais simples que uma conta digital, mais seguro que aplicações tradicionais
          </p>
        </div>

        {/* Destaques Revisados */}
        <div className="grid md:grid-cols-3 gap-6 text-left my-12">
          <div className="bg-white/10 p-6 rounded-xl hover:bg-white/15 transition">
            <div className="text-3xl mb-2">🛡️</div>
            <h3 className="text-xl font-bold mb-2">Tão Seguro Quanto Bancos</h3>
            <p className="text-gray-200">
              Tecnologia blockchain com auditoria 24h e transações monitoradas
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl hover:bg-white/15 transition">
            <div className="text-3xl mb-2">💸</div>
            <h3 className="text-xl font-bold mb-2">Simples e Acessível</h3>
            <p className="text-gray-200">
              Compre com Pix ou Boleto, sem necessidade de carteira digital complexa
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl hover:bg-white/15 transition">
            <div className="text-3xl mb-2">📈</div>
            <h3 className="text-xl font-bold mb-2">Transparência Total</h3>
            <p className="text-gray-200">
              Todas as movimentações públicas e verificáveis em tempo real
            </p>
          </div>
        </div>

        {/* CTAs com Garantias */}
        <div className="space-y-6">
          <div className="bg-green-500/10 p-4 rounded-lg border border-green-500">
            <p className="text-lg">✅ 100% de Reembolso nos Primeiros 7 Dias</p>
          </div>
          
          <a
            href="/register"
            className="inline-block bg-yellow-400 text-black px-12 py-5 rounded-2xl font-bold text-xl hover:bg-yellow-300 transform transition duration-500 hover:scale-105 shadow-lg shadow-yellow-400/30 group"
          >
            Experimente →
            <span className="block text-sm font-normal mt-1 opacity-80">Comece com apenas R$10</span>
          </a>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <img src="/pix-logo.png" alt="Pix" className="h-6" />
              Pagamentos via Pix
            </div>
            <div className="flex items-center gap-2">
              <img src="/boleto-logo.png" alt="Boleto" className="h-6" />
              Aceitamos Boleto
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
              </svg>
              Certificado SSL 256-bit
            </div>
          </div>
        </div>

        {/* Vídeo Explicativo Simples */}
        <div className="mt-16 bg-black/30 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-6 text-center">Entenda em 1 Minuto</h2>
          <div className="aspect-video bg-gray-800 rounded-xl flex items-center justify-center">
            <button className="play-button bg-yellow-400 p-6 rounded-full hover:scale-110 transition">
              ▶️
            </button>
          </div>
        </div>

        {/* Perguntas Frequentes Simplificadas */}
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Dúvidas Comuns</h2>
          <div className="space-y-4">
            <details className="bg-white/10 rounded-xl p-4">
              <summary className="font-semibold cursor-pointer">Preciso de conhecimento técnico?</summary>
              <p className="mt-2 text-gray-300">Não! Criamos tudo para ser simples como usar um aplicativo de banco.</p>
            </details>
            <details className="bg-white/10 rounded-xl p-4">
              <summary className="font-semibold cursor-pointer">Posso perder meu dinheiro?</summary>
              <p className="mt-2 text-gray-300">Sua participação é registrada permanentemente na blockchain, um sistema mais seguro que bancos tradicionais.</p>
            </details>
          </div>
        </div>

        {/* Disclaimer Legal Reforçado */}
        <div className="mt-12 text-xs text-gray-400 max-w-xl mx-auto border-t border-white/10 pt-8">
          <p>⚠️ PRV é um token de utilidade para acesso aos serviços da plataforma PrimeReserv. Não se trata de investimento financeiro, não garantimos retornos e o valor pode flutuar. Serviço regulamentado como prestação de serviços digitais nos termos da Lei nº 12.965/2014 (Marco Civil da Internet). Todas as transações são auditáveis publicamente na blockchain Solana.</p>
        </div>
      </div>
    </main>
  );
}