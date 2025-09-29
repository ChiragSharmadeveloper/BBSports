import React from 'react';
import './Homepage.css'; // Add your custom CSS for styling

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Header Section */}
      <header className="header">
        <h1>BB Sports</h1>
        <nav>
          <ul>
            <li><a href="#bats">Cricket Bats</a></li>
            <li><a href="#kits">Cricket Kits</a></li>
            <li><a href="#bags">Kit Bags</a></li>
            <li><a href="#pads">Pads</a></li>
            <li><a href="#helmets">Helmets</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Banner Section */}
      <section className="main-banner">
        <h2>Your One-Stop Shop for Cricket Equipment</h2>
        <p>High-quality gear for the serious cricketer</p>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          <div className="product-card">
            <img src="/image/bat2.jpg" alt="Cricket Bat" />
            <h3>Premium Cricket Bat</h3>
            <p>Price: $150</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="/image/bat 1.jpg" alt="Cricket Kit" />
            <h3>Complete Cricket Kit</h3>
            <p>Price: $250</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="/image/bat3.jpg" alt="Kit Bag" />
            <h3>Cricket Kit Bag</h3>
            <p>Price: $70</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="product-categories">
        <h2>Shop by Category</h2>
        <div className="category-list">
          <div className="category-card">
            <h3>Cricket Bats</h3>
            <img src="/images/cricket-bat-category.jpg" alt="Cricket Bats" />
            <button>Explore</button>
          </div>
          <div className="category-card">
            <h3>Cricket Kits</h3>
            <img src="/images/cricket-kit-category.jpg" alt="Cricket Kits" />
            <button>Explore</button>
          </div>
          <div className="category-card">
            <h3>Helmets</h3>
            <img src="/images/helmets-category.jpg" alt="Helmets" />
            <button>Explore</button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2025 BB Sports. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
