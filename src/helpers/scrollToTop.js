//Lleva la parte superior de la página con un efecto suave
export const scrollTop = () => {
  window.scrollTo({
    behavior: "smooth",
    top: 0,
  });
};