const styles = {
  headerHomePage: {
    fontSize: '40px',
  },
  containerHome: {
    backgroundImage:
      'url(https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)',
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
