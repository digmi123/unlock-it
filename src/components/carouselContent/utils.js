 export const renderStars = (rating) => {
    const totalStars = 5;
    let stars = '';
    for (let i = 1; i <= totalStars; i++) {
      stars += i <= rating ? '★' : '☆';
    }
    return stars;
  };