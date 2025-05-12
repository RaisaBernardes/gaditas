// src/components/ContactForm.tsx
"use client"

export default function ContactForm() {
  return (
    <form className="flex flex-col gap-6 w-full">
      <div className="flex flex-col">
        <label htmlFor="nome" className="text-sm font-medium text-gray-800">Nome</label>
        <input
          type="text"
          id="nome"
          name="nome"
          required
          className="border border-gray-300 rounded-md p-3 mt-1"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="telefone" className="text-sm font-medium text-gray-800">Telefone</label>
        <input
          type="tel"
          id="telefone"
          name="telefone"
          required
          className="border border-gray-300 rounded-md p-3 mt-1"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="text-sm font-medium text-gray-800">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="border border-gray-300 rounded-md p-3 mt-1"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="mensagem" className="text-sm font-medium text-gray-800">Mensagem</label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={5}
          required
          className="border border-gray-300 rounded-md p-3 mt-1 resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        className="mt-4 text-white px-6 py-3 rounded-md hover:bg-neutral-800 bg-neutral-700 transition font-[family-name:var(--font-geist-mono)]"
      >
        Enviar
      </button>
    </form>
  );
}
