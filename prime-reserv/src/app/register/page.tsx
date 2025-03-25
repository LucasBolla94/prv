"use client";
import { useState, useEffect } from 'react';
import { auth, db } from '@/lib/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  const [progress, setProgress] = useState(16);
  const [showTerms, setShowTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Estados do formulário
  const [formData, setFormData] = useState({
    email: '',
    nome: '',
    sobrenome: '',
    nascimento: '',
    senha: '',
    confirmaSenha: '',
    whatsapp: '',
    termos: false,
    maiorIdade: false
  });

   // Animação da barra de progresso (ÚNICA ALTERAÇÃO)
   useEffect(() => {
    const totalTime = 10 * 60 * 1000; // 5 minutos
    const start = 16;
    const end = 64;
    const steps = end - start;
    const interval = totalTime / steps;

    const timer = setInterval(() => {
      setProgress(prev => prev >= end ? end : prev + 1);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // Formatador de WhatsApp
  const formatWhatsApp = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    const match = numbers.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/);
    
    if (!match) return '';
    return [
      match[1] ? `(${match[1]}` : '',
      match[2] ? `) ${match[2]}` : '',
      match[3] ? `-${match[3]}` : ''
    ].join('');
  };

  // Manipulação de envio
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Validações
      if (formData.senha !== formData.confirmaSenha) {
        throw new Error('As senhas não coincidem');
      }

      if (!formData.termos || !formData.maiorIdade) {
        throw new Error('Aceite os termos para continuar');
      }

      // Criar usuário no Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.senha
      );

      // Salvar dados adicionais no Firestore
      await setDoc(doc(db, 'socios', userCredential.user.uid), {
        nome: formData.nome,
        sobrenome: formData.sobrenome,
        nascimento: formData.nascimento,
        whatsapp: `+55${formData.whatsapp}`,
        criadoEm: new Date().toISOString()
      });

      // Redirecionamento após breve animação
      setTimeout(() => router.push('/dashboard'), 2500);
      
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Erro no cadastro. Tente novamente.');
      }
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white px-6 py-10 flex flex-col items-center">
      <div className="max-w-md w-full space-y-6">
        {/* Cabeçalho Urgente */}
        <div className="text-center">
          <div className="animate-pulse bg-yellow-400/10 p-3 rounded-lg mb-4">
            <p className="text-lg font-semibold">
              ⚡ {progress}% já vendidos! Garanta o seu !
            </p>
          </div>
          
          {/* Barra de Progresso Animada */}
          <div className="w-full bg-gray-700 rounded-full h-4 mb-6 relative overflow-hidden">
            <div 
              className="bg-yellow-400 h-4 rounded-full transition-all duration-1000 relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 animate-glow bg-yellow-300/30"></div>
            </div>
          </div>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Campo WhatsApp Melhorado */}
          <div>
            <label className="block text-sm font-medium mb-1">
              WhatsApp (Obrigatório) *
            </label>
            <div className="flex gap-2">
              <div className="flex items-center px-3 bg-black/30 rounded-lg border border-gray-600">
                <span className="text-gray-400">+55</span>
              </div>
              <input
                type="tel"
                required
                className="w-full px-4 py-3 bg-black/30 rounded-lg focus:ring-2 focus:ring-yellow-400"
                placeholder="(00) 00000-0000"
                value={formatWhatsApp(formData.whatsapp)}
                onChange={(e) => {
                  const rawValue = e.target.value.replace(/\D/g, '');
                  setFormData({...formData, whatsapp: rawValue});
                }}
                maxLength={15}
              />
            </div>
            <p className="text-sm text-gray-400 mt-1">Exemplo: (11) 98765-4321</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nome *</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 bg-black/30 rounded-lg"
                value={formData.nome}
                onChange={(e) => setFormData({...formData, nome: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Sobrenome *</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 bg-black/30 rounded-lg"
                value={formData.sobrenome}
                onChange={(e) => setFormData({...formData, sobrenome: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Data de Nascimento *</label>
            <input
              type="date"
              required
              className="w-full px-4 py-3 bg-black/30 rounded-lg"
              value={formData.nascimento}
              onChange={(e) => setFormData({...formData, nascimento: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email *</label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 bg-black/30 rounded-lg"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Senha *</label>
              <input
                type="password"
                required
                className="w-full px-4 py-3 bg-black/30 rounded-lg"
                value={formData.senha}
                onChange={(e) => setFormData({...formData, senha: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Confirme a Senha *</label>
              <input
                type="password"
                required
                className="w-full px-4 py-3 bg-black/30 rounded-lg"
                value={formData.confirmaSenha}
                onChange={(e) => setFormData({...formData, confirmaSenha: e.target.value})}
              />
            </div>
          </div>

          {/* Checkboxes */}
          <div className="space-y-3">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                required
                checked={formData.termos}
                onChange={(e) => setFormData({...formData, termos: e.target.checked})}
                className="w-4 h-4 text-yellow-400 bg-gray-800 rounded focus:ring-yellow-400"
              />
              <span>
                Li e aceito os{' '}
                <button
                  type="button"
                  onClick={() => setShowTerms(true)}
                  className="text-yellow-400 hover:underline"
                >
                  Termos de Uso
                </button>{' '}
                *
              </span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                required
                checked={formData.maiorIdade}
                onChange={(e) => setFormData({...formData, maiorIdade: e.target.checked})}
                className="w-4 h-4 text-yellow-400 bg-gray-800 rounded focus:ring-yellow-400"
              />
              <span>Confirmo que sou maior de 18 anos *</span>
            </label>
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-yellow-400 text-black py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition disabled:opacity-50
                      animate-pulse hover:animate-none`}
          >
            {isSubmitting ? 'Finalizando...' : '🚀 Completar Cadastro Agora →'}
          </button>
        </form>

        {/* Novas Animações */}
        <div className="flex justify-center items-center gap-2 text-yellow-400 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          <span>+428 pessoas compraram hoje</span>
        </div>

        {/* Modal de Termos */}
        {showTerms && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4">
            <div className="bg-gray-900 max-w-2xl p-6 rounded-xl">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Termos de Uso</h2>
                <button
                  onClick={() => setShowTerms(false)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-4 text-gray-300 overflow-y-auto max-h-[60vh]">
                <p>1. O token PRV é um utilitário digital para acesso à plataforma...</p>
              </div>
            </div>
          </div>
        )}

        {/* Animação de Sucesso */}
        {isSubmitting && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="animate-bounce text-6xl">🎉</div>
              <h3 className="text-2xl font-bold">Cadastro concluído com sucesso!</h3>
              <p className="text-gray-300">Redirecionando para sua conta...</p>
            </div>
          </div>
        )}

        {/* CSS das Animações */}
        <style jsx>{`
          @keyframes glow {
            0% { opacity: 0.3; }
            50% { opacity: 0.7; }
            100% { opacity: 0.3; }
          }
          .animate-glow {
            animation: glow 2s infinite;
          }
        `}</style>
      </div>
    </main>
  );
}