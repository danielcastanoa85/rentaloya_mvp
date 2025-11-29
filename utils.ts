export const openWhatsApp = (message: string) => {
  const phoneNumber = "573008840061";
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
};