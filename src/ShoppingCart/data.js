const products = [
{
    title: "An Introduction to C & GUI Programming, 2nd Edition",
    description: "",
    id: "9781912047451",
    price: 14.92,
    image: "https://itbook.store/img/books/9781912047451.png",
    siteUrl: "https://itbook.store/books/9781912047451"
  },
  {
    title: "Snowflake: The Definitive Guide",
    description: "Architecting, Designing, and Deploying on the Snowflake Data Cloud",
    id: "9781098103828",
    price: 58.90,
    image: "https://itbook.store/img/books/9781098103828.png",
    siteUrl: "https://itbook.store/books/9781098103828"
  },
  {
    title: "Python for Data Analysis, 3rd Edition",
    description: "Data Wrangling with pandas, NumPy, and Jupyter",
    id: "9781098104030",
    price: 36.18,
    image: "https://itbook.store/img/books/9781098104030.png",
    siteUrl: "https://itbook.store/books/9781098104030"
  },
  {
    title: "Reliable Machine Learning",
    description: "Applying SRE Principles to ML in Production",
    id: "9781098106225",
    price: 43.99,
    image: "https://itbook.store/img/books/9781098106225.png",
    siteUrl: "https://itbook.store/books/9781098106225"
  },
  {
    title: "Data Visualization with Python and JavaScript, 2nd Edition",
    description: "Scrape, Clean, Explore, and Transform Your Data",
    id: "9781098111878",
    price: 60.99,
    image: "https://itbook.store/img/books/9781098111878.png",
    siteUrl: "https://itbook.store/books/9781098111878"
  },
  {
    title: "Learning Microsoft Power BI",
    description: "Transforming Data into Insights",
    id: "9781098112844",
    price: 40.46,
    image: "https://itbook.store/img/books/9781098112844.png",
    siteUrl: "https://itbook.store/books/9781098112844"
  },
  {
    title: "C++ Software Design",
    description: "Design Principles and Patterns for High-Quality Software",
    id: "9781098113162",
    price: 47.03,
    image: "https://itbook.store/img/books/9781098113162.png",
    siteUrl: "https://itbook.store/books/9781098113162"
  },
  {
    title: "Terraform: Up and Running, 3rd Edition",
    description: "Writing Infrastructure as Code",
    id: "9781098116743",
    price: 41.99,
    image: "https://itbook.store/img/books/9781098116743.png",
    siteUrl: "https://itbook.store/books/9781098116743"
  },
  {
    title: "Flutter and Dart Cookbook",
    description: "Developing Full-Stack Applications for the Cloud",
    id: "9781098119515",
    price: 50.52,
    image: "https://itbook.store/img/books/9781098119515.png",
    siteUrl: "https://itbook.store/books/9781098119515"
  },
  {
    title: "Python Data Science Handbook, 2nd Edition",
    description: "Essential Tools for Working with Data",
    id: "9781098121228",
    price: 56.16,
    image: "https://itbook.store/img/books/9781098121228.png",
    siteUrl: "https://itbook.store/books/9781098121228"
  },
  {
    title: "Raspberry Pi Cookbook, 4th Edition",
    description: "Software and Hardware Problems and Solutions",
    id: "9781098130923",
    price: 14.99,
    image: "https://itbook.store/img/books/9781098130923.png",
    siteUrl: "https://itbook.store/books/9781098130923"
  },
  {
    title: "Azure Maps Using Blazor Succinctly",
    description: "",
    id: "9781642002263",
    price: 40.00,
    image: "https://itbook.store/img/books/9781642002263.png",
    siteUrl: "https://itbook.store/books/9781642002263"
  },
  {
    title: "Full Stack Quarkus and React",
    description: "Hands-on full stack web development with Java, React, and Kubernetes",
    id: "9781800562738",
    price: 39.99,
    image: "https://itbook.store/img/books/9781800562738.png",
    siteUrl: "https://itbook.store/books/9781800562738"
  },
  {
    title: "Mathematics for Game Programming and Computer Graphics",
    description: "Explore the essential mathematics for creating, rendering, and manipulating 3D virtual environments",
    id: "9781801077330",
    price: 49.99,
    image: "https://itbook.store/img/books/9781801077330.png",
    siteUrl: "https://itbook.store/books/9781801077330"
  },
  {
    title: "Architecting and Building High-Speed SoCs",
    description: "Design, develop, and debug complex FPGA-based systems-on-chip",
    id: "9781801810999",
    price: 32.99,
    image: "https://itbook.store/img/books/9781801810999.png",
    siteUrl: "https://itbook.store/books/9781801810999"
  },
  {
    title: "Web Development with Julia and Genie",
    description: "A hands-on guide to high-performance server-side web development with the Julia programming language",
    id: "9781801811132",
    price: 39.99,
    image: "https://itbook.store/img/books/9781801811132.png",
    siteUrl: "https://itbook.store/books/9781801811132"
  },
  {
    title: "Java Memory Management",
    description: "A comprehensive guide to garbage collection and JVM tuning",
    id: "9781801812856",
    price: 34.99,
    image: "https://itbook.store/img/books/9781801812856.png",
    siteUrl: "https://itbook.store/books/9781801812856"
  },
  {
    title: "Test-Driven Development with C++",
    description: "A simple guide to writing bug-free Agile code",
    id: "9781803242002",
    price: 44.99,
    image: "https://itbook.store/img/books/9781803242002.png",
    siteUrl: "https://itbook.store/books/9781803242002"
  },
  {
    title: "Software Test Design",
    description: "Write comprehensive test plans to uncover critical bugs in web, desktop, and mobile apps",
    id: "9781804612569",
    price: 44.99,
    image: "https://itbook.store/img/books/9781804612569.png",
    siteUrl: "https://itbook.store/books/9781804612569"
  },
  {
    title: "Microservices with Go",
    description: "Building scalable and reliable microservices with Go",
    id: "9781804617007",
    price: 29.99,
    image: "https://itbook.store/img/books/9781804617007.png",
    siteUrl: "https://itbook.store/books/9781804617007"
  }
]

export default products;