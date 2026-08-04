function Header({ image, name }) {
  return (
    <header>
      <img src={image} alt="blog logo" />
      <h1>{name}</h1>
    </header>
  );
}

export default Header;
