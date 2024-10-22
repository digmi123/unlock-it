import PropTypes from 'prop-types';

const BannerLayout = ({ children }) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap- p-0 bg-dark-blue">
      {children}
    </section>
  );
};

BannerLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BannerLayout;