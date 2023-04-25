import { Item } from 'components/Cast/Cast.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'servises/Api';
import { ListItem } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(res => setReviews(res.data.results));
  }, [movieId]);

  if (!reviews) {
    return;
  }

  return (
<Item>
      {reviews.length === 0 && <p> We don't have any reviews on this movie</p>}
{reviews.map(({id, content, author}) => (
    
<ListItem key={id}>
    <h3>{author}</h3>
    <p>{content}</p>
</ListItem>

))}

      </Item>

  )
};
export default Reviews;