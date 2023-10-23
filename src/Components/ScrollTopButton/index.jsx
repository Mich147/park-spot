function ScrollTopButton() {
  const top = () => {
    window.scrollTo(0, 0);
  };
  return (
    <button onClick={top} className="scroll-top">
      <i className="bx bxs-chevrons-up"></i>
    </button>
  );
}

export default ScrollTopButton;
