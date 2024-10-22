 export const renderStars = (rating) => {
    const totalStars = 5; // Assuming the rating is out of 5
    let stars = '';
    for (let i = 1; i <= totalStars; i++) {
      stars += i <= rating ? '★' : '☆'; // Full star for rating, empty for the rest
    }
    return stars;
  };