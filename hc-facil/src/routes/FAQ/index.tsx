import { Link } from "react-router-dom";

export default function Faq() {
  return (
    <main className="h-auto flex flex-col items-center pb-30">
      <div className="flex flex-col gap-10 pt-20 text-center">
        <h1 className="text-white text-5xl font-bold pb-5">FAQ</h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="bg-white flex flex-col gap-8 pl-10 pr-10 pt-10 p-10 max-w-4xl text-lg rounded-4xl">
          <h2 className="bg-blue-100 rounded-3xl w-110 h-10 m-auto text-center text-3xl text-[#087bca] font-bold">
            FAQ(Perguntas frequentes)
          </h2>
          <h3 className="faq-info">1. O que é o HC Fácil?</h3>
          <p>
            O HC Fácil é uma plataforma digital desenvolvida para auxiliar pacientes a compreenderem e utilizarem o site oficial do Hospital das Clínicas. Funciona como um guia assistivo, oferecendo tutoriais, calendários e um chatbot, especialmente voltado para pessoas com dificuldades no uso de tecnologias.
          </p>
          <h3 className="faq-info">
            2. O HC Fácil substitui o site oficial do Hospital das Clínicas?
          </h3>
          <p>
            Não. O HC Fácil é um complemento. Ele não realiza agendamentos reais
            nem acessa dados do hospital. Seu objetivo é orientar o paciente e
            tornar a navegação mais fácil e compreensível.
          </p>
          <h3 className="faq-info">3. Quem pode usar o HC Fácil?</h3>
          <p>
            Qualquer pessoa! Mas ele foi pensado especialmente para pacientes
            que têm dificuldade em usar sites, como idosos, pessoas com
            limitações cognitivas ou pouca experiência digital.
          </p>
          <h3 className="faq-info">
            4. O HC Fácil armazena meus dados pessoais?
          </h3>
          <p>
            Não. O site é apenas uma ferramenta educativa. Nenhuma informação
            sensível ou pessoal é salva.
          </p>
          <h3 className="faq-info">
            5. Como funciona o calendário interativo?
          </h3>
          <p>
            É uma simulação. Você pode marcar uma data como se fosse agendar uma
            consulta, para treinar como faria no site oficial. Assim, você se
            prepara com mais segurança.
          </p>
          <h3 className="faq-info">
            6. Vou receber notificações reais pelo Telegram?
          </h3>
          <p>
            Sim, se você permitir. As notificações são simuladas e servem como
            lembretes para você se organizar melhor com seus atendimentos.
          </p>
          <h3 className="faq-info">7. Para que serve o chatbot?</h3>
          <p>
            O chatbot responde perguntas simples sobre como usar o HC Fácil e
            navegar pelo site do HC. Ele é rápido, acessível e fácil de usar.
          </p>
          <h3 className="faq-info">
            8. Os guias são escritos em linguagem fácil??
          </h3>
          <p>
            Sim! Todos os tutoriais são feitos com linguagem clara, passo a
            passo, com imagens e vídeos para ajudar o entendimento.
          </p>
          <h3 className="faq-info">
            9. Preciso me cadastrar para usar o HC Fácil?
          </h3>
          <p>
            Não. Todo o conteúdo é aberto e gratuito. Basta acessar o site e
            começar a usar.
          </p>
          <h3 className="faq-info">10. Quem criou o HC Fácil?</h3>
          <p>
            O HC Fácil é um projeto acadêmico, desenvolvido por estudantes que
            desejam tornar a saúde digital mais acessível para todos. Para mais
            detalhes, visite <Link to="quemSomos">Quem Somos</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
