const styles = {
  headerHomePage: {
    fontSize: '40px',
  },
};

export default function HomePageView() {
  return (
    <section>
      <h1 style={styles.headerHomePage}>
        Greetings, this app is a phone book. Here you can register and add your
        contacts
      </h1>
    </section>
  );
}
