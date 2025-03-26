export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white px-6 py-10 flex flex-col items-center justify-center">
      <div className="max-w-4xl text-center space-y-8">
        {/* Header com informações atualizadas */}
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
            Sua Autocustódia Simplificada
            <br />
            <span className="text-yellow-400">A partir de R$300,00</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Tokens PrimeReserv + Suporte Especializado via WhatsApp e E-mail
          </p>
        </div>

        {/* Novos Benefícios */}
        <div className="grid md:grid-cols-2 gap-6 text-left my-12">
          <div className="bg-emerald-500/10 p-6 rounded-xl border border-emerald-500/30">
            <h3 className="text-xl font-bold mb-2 flex items-center gap-3">
              <div className="p-2 bg-emerald-500/20 rounded-lg">🎁</div>
              Bônus Exclusivo
            </h3>
            <p className="text-gray-200">
              Os primeiros 100 compradores recebem:
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>E-book completo de autocustódia</li>
                <li>Acesso a vídeo-aulas exclusivas</li>
                <li>Suporte prioritário 24/7</li>
              </ul>
            </p>
          </div>

          <div className="bg-blue-500/10 p-6 rounded-xl border border-blue-500/30">
            <h3 className="text-xl font-bold mb-2 flex items-center gap-3">
              <div className="p-2 bg-blue-500/20 rounded-lg">🛡️</div>
              Segurança Comprovada
            </h3>
            <p className="text-gray-200">
              Proteção SSK-256 bit com:
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Registro imutável na blockchain</li>
                <li>Auditoria transparente em tempo real</li>
                <li>Verificação independente pela Solscan</li>
              </ul>
            </p>
          </div>
        </div>

        {/* Garantia Revisada */}
        <div className="space-y-6">
          <div className="bg-amber-500/10 p-4 rounded-lg border border-amber-500 text-center">
            <p className="text-lg font-semibold">⚠️ Política de Reembolso</p>
            <p className="text-sm mt-2 text-gray-300">
              Oferecemos suporte para revenda via DEX nos primeiros 7 dias. 
              <br />
              <span className="text-amber-400">*Valor sujeito à variação do mercado</span>
            </p>
          </div>
          
          <a
            href="/register"
            className="inline-block bg-yellow-400 text-black px-12 py-5 rounded-2xl font-bold text-xl hover:bg-yellow-300 transform transition duration-500 hover:scale-105 shadow-lg shadow-yellow-400/30 group"
          >
            Comece Agora →
            <span className="block text-sm font-normal mt-1 opacity-80">Investimento inicial: R$300,00</span>
          </a>
        </div>

        {/* Suporte Humanizado */}
        <div className="mt-12 bg-white/10 p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-4">Suporte 100% Humano</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="flex-1">
              <div className="text-4xl mb-4">💬</div>
              <p className="font-semibold">WhatsApp Direto</p>
              <p className="text-gray-300 text-sm mt-2">Tire dúvidas instantaneamente com nossa equipe</p>
            </div>
            <div className="flex-1">
              <div className="text-4xl mb-4">📧</div>
              <p className="font-semibold">E-mail Prioritário</p>
              <p className="text-gray-300 text-sm mt-2">Respostas detalhadas em até 2 horas úteis</p>
            </div>
          </div>
        </div>

        {/* Gestão de Riscos */}
        <div className="mt-12 bg-red-500/10 p-8 rounded-2xl border border-red-500/30">
          <h2 className="text-2xl font-bold mb-4 text-center">Transparência Total</h2>
          <div className="space-y-4">
            <p className="text-gray-300">
              <span className="font-semibold text-red-400">Atenção:</span> Como todo ativo digital, o valor do PRV pode flutuar. Você está adquirindo:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-left">
              <li>Direito de uso na plataforma PrimeReserv</li>
              <li>Potencial de valorização orgânica</li>
              <li>Autocustódia real de seus ativos</li>
            </ul>
            <p className="text-sm text-gray-400 mt-4">
              Sua participação é registrada permanentemente na blockchain Solana, oferecendo segurança superior aos sistemas bancários tradicionais.
            </p>
          </div>
        </div>

        {/* FAQ Atualizado */}
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Perguntas Frequentes</h2>
          <div className="space-y-4">
            <details className="bg-white/10 rounded-xl p-4">
              <summary className="font-semibold cursor-pointer">Preciso de conhecimento técnico?</summary>
              <p className="mt-2 text-gray-300">Nossa plataforma foi desenvolvida para ser mais simples que um aplicativo bancário convencional. Você receberá:</p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Passo-a-passo visual</li>
                <li>Suporte por vídeo-chamada</li>
                <li>Guia de referência rápida</li>
              </ul>
            </details>
            
            <details className="bg-white/10 rounded-xl p-4">
              <summary className="font-semibold cursor-pointer">Como funciona a segurança?</summary>
              <p className="mt-2 text-gray-300">
                Utilizamos criptografia SSK-256 bit com:
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li>Chaves privadas protegidas</li>
                  <li>Verificação em 2 etapas opcional</li>
                  <li>Monitoramento 24/7 de transações</li>
                </ul>
              </p>
            </details>
          </div>
        </div>

        {/* Disclaimer Legal Reforçado */}
        <div className="mt-12 text-xs text-gray-400 max-w-xl mx-auto border-t border-white/10 pt-8">
          <p>⚠️ PRV é um token de utilidade para acesso aos serviços da plataforma PrimeReserv (CNPJ 00.000.000/0000-00). Não se trata de investimento financeiro ou segurança. O valor pode flutuar de acordo com a demanda de mercado. Serviço regulamentado como prestação de serviços digitais nos termos da Lei nº 12.965/2014. Liquidez garantida via DEX com book de ofertas mínimo de R$50.000,00. Todas as transações são auditáveis publicamente na blockchain Solana.</p>
        </div>
      </div>
    </main>
  );
}