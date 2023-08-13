import * as React from 'react';
import { Card, CardHeader, CardPreview, Text, Caption1 } from '@fluentui/react-components';
import { Modal, PrimaryButton } from '@fluentui/react';
import '../sass/main.scss';

interface MovieCardProps {
  title: string;
  release_date: string;
  description: string;
  adult: boolean;
  imageUrl: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, release_date, description, adult, imageUrl }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const imageUrlToShow = imageUrl === 'https://image.tmdb.org/t/p/w300null'
  ? '/images/noimage.jpg'
  : imageUrl;

  return (
    <Card className="movie-card"> 
      <CardPreview>
        <img
          src={imageUrlToShow}
          alt={title}
          className="movie-image" 
        />
      </CardPreview>
      <CardHeader
        header={<Text weight="semibold">{title}</Text>}
        description={<Caption1 className="movie-date">{release_date}</Caption1>} 
        className="card-header"
      />
      <PrimaryButton text="See details" onClick={openModal} className="see-details-button" /> 
      <Modal isOpen={isModalOpen} onDismiss={closeModal} isBlocking={false}>
        <div className="modal-content">
          <h2>{title}</h2>
          <p>Release date: {release_date}</p>
          <p>Description: {description}</p>
          <p>To adults: {adult ? 'Sí' : 'No'}</p>
        </div>
      </Modal>
    </Card>
  );
};

export default MovieCard;
