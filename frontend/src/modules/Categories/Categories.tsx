import { products } from "constants/products";
import {
  Card,
  CardTitle,
  Container,
  Header,
  Hr,
  Img,
  Section,
  StyledLink,
  Title,
} from "./styles";

const Categories = () => {
  return (
    <Container>
      <Header>
        <Title>Categories</Title>
        <Hr />
      </Header>
      <Section>
        {products.map((product) => (
          <StyledLink to={`/products/${product.href}`} key={product.id}>
            <Card>
              <Img src={product.img} alt={product.name} />
              <CardTitle>{product.name}</CardTitle>
            </Card>
          </StyledLink>
        ))}
      </Section>
    </Container>
  );
};

export default Categories;
