import { EmptyStar, Star } from "assets";
import { Container, Span, Image } from "./styles";

interface IRating {
  value: number;
}

const Rating = ({ value }: IRating) => {
  const ratings = [1, 2, 3, 4, 5];

  return (
    <Container>
      {ratings.map((rating) => (
        <Span key={rating}>
          {value >= rating ? (
            <Image src={EmptyStar} alt="emptyStar" />
          ) : (
            <Image src={Star} alt="star" />
          )}
        </Span>
      ))}
    </Container>
  );
};

export default Rating;
