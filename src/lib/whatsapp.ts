export const WHATSAPP_NUMBER = "559193817161";

export const DEFAULT_MESSAGE =
  "Olá! Vi este produto na vitrine da LP Store e gostaria de saber a disponibilidade e o valor.";

export function whatsappLink(message: string = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
