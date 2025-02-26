import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Courses = () => {
  return (
    <div className="shop-section">
        <div className="container">
            <div className="row">
                <div className="col-xl-8 col-lg-7">
                    <div className="shop-fillter">
                        <p>Showing 1–8 of 11 results</p>
                        <form action="#">
                            <select name="fillter" className="fillter-option">
                                <option>Default sorting</option>
                                <option value="popularity">popularity</option>
                                <option value="average">average rating</option>
                                <option value="low">price: low to high</option>
                                <option value="high">price: high to low</option>
                                <option value="latest">latest</option>
                            </select>
                        </form>
                    </div>
                    <div className="row gutter-x-15 gutter-y-60">
                        <div className="col-xl-6">
                            <div className="product-box animate fadeInUp wow" data-wow-duration="1500ms" data-wow-delay="200ms">
                                <div className="product-image">
                                    <Image src="/assets/images/shop/product-1.png" alt="product-image" width={500} height={300} />
                                    <ul className="cart-icon">
                                        <li><Link href="/shop-details"><i className="fa-solid fa-cart-shopping"></i></Link>
                                        </li>
                                        <li><Link href="/cart"><i className="fa-solid fa-heart"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="product-details">
                                    <h4><Link href="/shop-details">White Bottle</Link></h4>
                                    <p>$120.00</p>
                                    <ul className="product-retting">
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-solid fa-star"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="product-box animate fadeInUp wow" data-wow-duration="1500ms" data-wow-delay="400ms">
                                <div className="product-image">
                                    <Image src="/assets/images/shop/product-2.png" alt="product-image" width={500} height={300} />
                                    <Link href="/shop-details" className="offer">Sale</Link>
                                    <ul className="cart-icon">
                                        <li><Link href="/shop-details"><i className="fa-solid fa-cart-shopping"></i></Link>
                                        </li>
                                        <li><Link href="/cart"><i className="fa-solid fa-heart"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="product-details">
                                    <h4><Link href="/shop-details">Amazon Portable Speaker</Link></h4>
                                    <p>$120.00</p>
                                    <ul className="product-retting">
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-regular fa-star"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="product-box animate fadeInUp wow" data-wow-duration="1500ms" data-wow-delay="600ms">
                                <div className="product-image">
                                    <Image src="/assets/images/shop/product-3.png" alt="product-image" width={500} height={300} />
                                    <Link href="/shop-details" className="offer">Sale</Link>
                                    <ul className="cart-icon">
                                        <li><Link href="/shop-details"><i className="fa-solid fa-cart-shopping"></i></Link>
                                        </li>
                                        <li><Link href="/cart"><i className="fa-solid fa-heart"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="product-details">
                                    <h4><Link href="/shop-details">Mango Handbag</Link></h4>
                                    <p>$120.00</p>
                                    <ul className="product-retting">
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-regular fa-star"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="product-box animate fadeInUp wow" data-wow-duration="1500ms" data-wow-delay="800ms">
                                <div className="product-image">
                                    <Image src="/assets/images/shop/product-4.png" alt="product-image" width={500} height={300} />
                                    <ul className="cart-icon">
                                        <li><Link href="/shop-details"><i className="fa-solid fa-cart-shopping"></i></Link>
                                        </li>
                                        <li><Link href="/cart"><i className="fa-solid fa-heart"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="product-details">
                                    <h4><Link href="/shop-details">Amazon Portable Speaker</Link></h4>
                                    <p>$120.00</p>
                                    <ul className="product-retting">
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-solid fa-star"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="product-box animate fadeInUp wow" data-wow-duration="1500ms" data-wow-delay="1000ms">
                                <div className="product-image">
                                    <Image src="/assets/images/shop/product-5.png" alt="product-image" width={500} height={300} />
                                    <ul className="cart-icon">
                                        <li><Link href="/shop-details"><i className="fa-solid fa-cart-shopping"></i></Link>
                                        </li>
                                        <li><Link href="/cart"><i className="fa-solid fa-heart"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="product-details">
                                    <h4><Link href="/shop-details">Slim Smart Watch</Link></h4>
                                    <p>$120.00</p>
                                    <ul className="product-retting">
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-solid fa-star"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="product-box animate fadeInUp wow" data-wow-duration="1500ms" data-wow-delay="1200ms">
                                <div className="product-image">
                                    <Image src="/assets/images/shop/product-6.png" alt="product-image" width={500} height={300} />
                                    <Link href="/shop-details" className="offer">Sale</Link>
                                    <ul className="cart-icon">
                                        <li><Link href="/shop-details"><i className="fa-solid fa-cart-shopping"></i></Link>
                                        </li>
                                        <li><Link href="/cart"><i className="fa-solid fa-heart"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="product-details">
                                    <h4><Link href="/shop-details">Gloving T-shirt</Link></h4>
                                    <p>$120.00</p>
                                    <ul className="product-retting">
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-regular fa-star"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="product-box animate fadeInUp wow" data-wow-duration="1500ms" data-wow-delay="1600ms">
                                <div className="product-image">
                                    <Image src="/assets/images/shop/product-7.png" alt="product-image" width={500} height={300} />
                                    <ul className="cart-icon">
                                        <li><Link href="/shop-details"><i className="fa-solid fa-cart-shopping"></i></Link>
                                        </li>
                                        <li><Link href="/shop-details"><i className="fa-solid fa-heart"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="product-details">
                                    <h4><Link href="/shop-details">Earpad Special</Link></h4>
                                    <p>$120.00</p>
                                    <ul className="product-retting">
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-regular fa-star"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="product-box animate fadeInUp wow" data-wow-duration="1500ms" data-wow-delay="1800ms">
                                <div className="product-image">
                                    <Image src="/assets/images/shop/product-8.png" alt="product-image" width={500} height={300} />
                                    <ul className="cart-icon">
                                        <li><Link href="/shop-details"><i className="fa-solid fa-cart-shopping"></i></Link>
                                        </li>
                                        <li><Link href="/shop-details"><i className="fa-solid fa-heart"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="product-details">
                                    <h4><Link href="/shop-details">Coffee Mug</Link></h4>
                                    <p>$120.00</p>
                                    <ul className="product-retting">
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-solid fa-star"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="pagination">
                                <div className="blog-pagination-btn active">
                                    <Link href="#">1</Link>
                                </div>
                                <div className="blog-pagination-btn">
                                    <Link href="#">2</Link>
                                </div>
                                <div className="blog-pagination-btn">
                                    <Link href="#"><i className="fa-solid fa-chevron-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-5">
                    <div className="shop-sidebar">
                        <div className="shop-widget animate fadeInRight wow" data-wow-duration="1500ms" data-wow-delay="200ms">
                            <div className="shop-search-widget">
                                <form action="#">
                                    <input type="search" name="search" placeholder="Search Here ..." />
                                    <button type="submit">
                                        <Image src="/assets/images/svg/header/Search.svg" alt="icon" width={20} height={20} />
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="shop-widget animate fadeInRight wow" data-wow-duration="1500ms" data-wow-delay="400ms">
                            <div className="product-category-widget">
                                <h4>Product categories</h4>
                                <ul>
                                    <li><Link href="#">Business Consulting</Link><span>3</span></li>
                                    <li><Link href="#">Corporate</Link><span>1</span></li>
                                    <li><Link href="#">IT Solutions</Link><span>2</span></li>
                                    <li><Link href="#">Marketing</Link><span>4</span></li>
                                    <li><Link href="#">Startuo Consulting</Link><span>5</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="shop-widget animate fadeInRight wow" data-wow-duration="1500ms" data-wow-delay="600ms">
                            <div className="fillter-widget">
                                <h4>Filter by pricing</h4>
                                <span id="fillter-rang" className="fillter-price-rang">
                                    <span id="fillter-rang-handle" className="fillter-price-rang-handle"></span>
                                </span>
                                <div className="fillter-price-box">
                                    <span className="fillter-price-rang-inner">
                                        <span id="current-price">$50</span> -
                                        <span id="max-price"></span>
                                    </span>
                                    <Link href="/shop" className="btn btn-primary btn-theme">Filter</Link>
                                </div>
                            </div>
                        </div>
                        <div className="shop-widget animate fadeInRight wow" data-wow-duration="1500ms" data-wow-delay="800ms">
                            <div className="product-widget">
                                <h4>Products</h4>
                                <div className="product-list">
                                    <Image src="/assets/images/shop/product-9.jpg" alt="product-image" width={100} height={100} />
                                    <div className="title">
                                        <Link href="/shop-details">Thermal Water Tank</Link>
                                        <p>$12.00</p>
                                    </div>
                                </div>
                                <div className="product-list">
                                    <Image src="/assets/images/shop/product-10.jpg" alt="product-image" width={100} height={100} />
                                    <div className="title">
                                        <Link href="/shop-details">Samsung Watch</Link>
                                        <p>$30.00</p>
                                    </div>
                                </div>
                                <div className="product-list">
                                    <Image src="/assets/images/shop/product-11.jpg" alt="product-image" width={100} height={100} />
                                    <div className="title">
                                        <Link href="/shop-details">Amazon Portable Speaker</Link>
                                        <p>$10.00</p>
                                    </div>
                                </div>
                                <div className="product-list">
                                    <Image src="/assets/images/shop/product-12.jpg" alt="product-image" width={100} height={100} />
                                    <div className="title">
                                        <Link href="/shop-details">Thermal Specker</Link>
                                        <p>$60.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shop-widget animate fadeInRight wow" data-wow-duration="1500ms" data-wow-delay="1000ms">
                            <div className="tag-widget">
                                <h4>Our Tags</h4>
                                <ul>
                                    <li><Link href="#">marketing</Link></li>
                                    <li><Link href="#">Business</Link></li>
                                    <li><Link href="#">Consulting</Link></li>
                                    <li><Link href="#">Finance</Link></li>
                                    <li><Link href="#">Bank</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Courses;
