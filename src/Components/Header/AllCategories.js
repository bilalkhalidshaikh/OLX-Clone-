import React from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import "../../Styles/Categories.css";

export default function AllCategories() {
  return (
    <>
      <div>
        <header className="dark">
          <nav role="navigation">
            <a href="javascript:void(0);" className="ic menu" tabIndex={1}>
              <span className="line" />
              <span className="line" />
              <span className="line" />
            </a>
            <a href="javascript:void(0);" className="ic close" />
            <ul className="main-nav">
              {/* <li className="top-level-link">
                <a>
                  <span>All Categories</span>
                </a>
              </li> */}
              <li className="top-level-link">
                <a className="mega-menu">
                  <span>
                    <strong>All Categories</strong>
                    <ArrowDropDownIcon />
                  </span>
                </a>
                <div className="sub-menu-block">
                  <div className="row">
                    <div className="col-md-4 col-lg-4 col-sm-4">
                      <h2 className="sub-menu-head">Mobiles</h2>
                      <ul className="sub-menu-lists">
                        <li>
                          <a>Tablets</a>
                        </li>
                        <li>
                          <a>Accessories</a>
                        </li>
                        <li>
                          <a>Mobile Phones</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-4">
                      <h2 className="sub-menu-head">Electronics & Homes Appliance</h2>
                      <ul className="sub-menu-lists">
                        <li>
                          <a>Computer & Accessories</a>
                        </li>
                        <li>
                          <a>TV-Video-Audio</a>
                        </li>
                        <li>
                          <a>Cameras & Accessories</a>
                        </li>
                        <li>
                          <a>Games & Entertainment</a>
                        </li>
                        <li>
                          <a>Other Home Appliance</a>
                        </li>
                        <li>
                          <a>Generators, UPS & Power Solutions</a>
                        </li>
                        <li>
                          <a>Kitchen Appliance</a>
                        </li>
                        <li>
                          <a>AC and Coolers</a>
                        </li>
                        <li>
                          <a>Fridges & Freezers</a>
                        </li>
                        <li>
                          <a>Washing Machine & Dryers</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-4">
                      <h2 className="sub-menu-head">Jobs</h2>
                      <ul className="sub-menu-lists">
                        <li>
                          <a>Online</a>
                        </li>
                        <li>
                          <a>Marketing</a>
                        </li>
                        <li>
                          <a>Advertising & PR</a>
                        </li>
                        <li>
                          <a>Education</a>
                        </li>
                        <li>
                          <a>Customer Service</a>
                        </li>
                        <li>
                          <a>Sales</a>
                        </li>
                        <li>
                          <a>IT & Networking</a>
                        </li>
                        <li>
                          <a>Hotels & Tourism</a>
                        </li>
                        <li>
                          <a>Clerical & Administration</a>
                        </li>
                        <li>
                          <a>Human Resourses</a>
                        </li>
                        <li>
                          <a>Accounting & Finance</a>
                        </li>
                        <li>
                          <a>Manufacturing</a>
                        </li>
                        <li>
                          <a>Medical</a>
                        </li>
                        <li>
                          <a>Domestic Staff</a>
                        </li>
                        <li>
                          <a>Part - Time</a>
                        </li>
                        <li>
                          <a>Other Jobs</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row banners-area">
                    <div className="col-md-6 col-lg-6 col-sm-6">
                      {/* <img
                        src="http://devitems.com/tf/teemo-preview/teemo/img/banner/banner-menu1.jpg"
                        width="100%;"
                      /> */}
                      <div className="row">
                        <div className="col-md-4 col-lg-4 col-sm-4">
                          <h2 className="sub-menu-head">Clothing</h2>
                          <ul className="sub-menu-lists">
                            <li>
                              <a>Mens</a>
                            </li>
                            <li>
                              <a>Womens</a>
                            </li>
                            <li>
                              <a>Kids</a>
                            </li>
                            <li>
                              <a>New Born</a>
                            </li>
                            <li>
                              <a>View All</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-4">
                          <h2 className="sub-menu-head">Handbags</h2>
                          <ul className="sub-menu-lists">
                            <li>
                              <a>Wallets</a>
                            </li>
                            <li>
                              <a>Athletic bag</a>
                            </li>
                            <li>
                              <a>Backpack</a>
                            </li>
                            <li>
                              <a>Bucket Bag</a>
                            </li>
                            <li>
                              <a>View All</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-4">
                          <h2 className="sub-menu-head">Shoes</h2>
                          <ul className="sub-menu-lists">
                            <li>
                              <a>Mens</a>
                            </li>
                            <li>
                              <a>Womens</a>
                            </li>
                            <li>
                              <a>Kids</a>
                            </li>
                            <li>
                              <a>View All</a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-4 col-lg-4 col-sm-4">
                          <h2 className="sub-menu-head">Clothing</h2>
                          <ul className="sub-menu-lists">
                            <li>
                              <a>Mens</a>
                            </li>
                            <li>
                              <a>Womens</a>
                            </li>
                            <li>
                              <a>Kids</a>
                            </li>
                            <li>
                              <a>New Born</a>
                            </li>
                            <li>
                              <a>View All</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-4">
                          <h2 className="sub-menu-head">Handbags</h2>
                          <ul className="sub-menu-lists">
                            <li>
                              <a>Wallets</a>
                            </li>
                            <li>
                              <a>Athletic bag</a>
                            </li>
                            <li>
                              <a>Backpack</a>
                            </li>
                            <li>
                              <a>Bucket Bag</a>
                            </li>
                            <li>
                              <a>View All</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-4">
                          <h2 className="sub-menu-head">Shoes</h2>
                          <ul className="sub-menu-lists">
                            <li>
                              <a>Mens</a>
                            </li>
                            <li>
                              <a>Womens</a>
                            </li>
                            <li>
                              <a>Kids</a>
                            </li>
                            <li>
                              <a>View All</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-6">
                      {/* <img
                        src="http://devitems.com/tf/teemo-preview/teemo/img/banner/banner-menu1.jpg"
                        width="100%;"
                      /> */}

                      <div className="row">
                        <div className="col-md-4 col-lg-4 col-sm-4">
                          <h2 className="sub-menu-head">Clothing</h2>
                          <ul className="sub-menu-lists">
                            <li>
                              <a>Mens</a>
                            </li>
                            <li>
                              <a>Womens</a>
                            </li>
                            <li>
                              <a>Kids</a>
                            </li>
                            <li>
                              <a>New Born</a>
                            </li>
                            <li>
                              <a>View All</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-4">
                          <h2 className="sub-menu-head">Handbags</h2>
                          <ul className="sub-menu-lists">
                            <li>
                              <a>Wallets</a>
                            </li>
                            <li>
                              <a>Athletic bag</a>
                            </li>
                            <li>
                              <a>Backpack</a>
                            </li>
                            <li>
                              <a>Bucket Bag</a>
                            </li>
                            <li>
                              <a>View All</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-4">
                          <h2 className="sub-menu-head">Shoes</h2>
                          <ul className="sub-menu-lists">
                            <li>
                              <a>Mens</a>
                            </li>
                            <li>
                              <a>Womens</a>
                            </li>
                            <li>
                              <a>Kids</a>
                            </li>
                            <li>
                              <a>View All</a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-4 col-lg-4 col-sm-4">
                          <h2 className="sub-menu-head">Clothing</h2>
                          <ul className="sub-menu-lists">
                            <li>
                              <a>Mens</a>
                            </li>
                            <li>
                              <a>Womens</a>
                            </li>
                            <li>
                              <a>Kids</a>
                            </li>
                            <li>
                              <a>New Born</a>
                            </li>
                            <li>
                              <a>View All</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-4">
                          <h2 className="sub-menu-head">Handbags</h2>
                          <ul className="sub-menu-lists">
                            <li>
                              <a>Wallets</a>
                            </li>
                            <li>
                              <a>Athletic bag</a>
                            </li>
                            <li>
                              <a>Backpack</a>
                            </li>
                            <li>
                              <a>Bucket Bag</a>
                            </li>
                            <li>
                              <a>View All</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-4">
                          <h2 className="sub-menu-head">Shoes</h2>
                          <ul className="sub-menu-lists">
                            <li>
                              <a>Mens</a>
                            </li>
                            <li>
                              <a>Womens</a>
                            </li>
                            <li>
                              <a>Kids</a>
                            </li>
                            <li>
                              <a>View All</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="top-level-link">
                <a>
                  <span>
                      Mobile Phones
                    <span />
                  </span>
                </a>
              </li>

              <li className="top-level-link">
                <a>
                  <span>
                    Cars
                    <span />
                  </span>
                </a>
              </li>

              <li className="top-level-link">
                <a>
                  <span>
                    Motorcycles
                    <span />
                  </span>
                </a>
              </li>

              <li className="top-level-link">
                <a>
                  <span>
                    Houses
                    <span />
                  </span>
                </a>
              </li>

              <li className="top-level-link">
                <a>
                  <span>
                    TV - Video - Audio
                    <span />
                  </span>
                </a>
              </li>
              
              <li className="top-level-link">
                <a>
                  <span>
                    Tablets
                    <span />
                  </span>
                </a>
              </li>
              
              <li className="top-level-link">
                <a>
                  <span>
                    Land & Plots
                    <span />
                  </span>
                </a>
              </li>
              {/* <li className="top-level-link">
                        <a className="mega-menu">
                          <span>About</span>
                        </a>
                        <div className="sub-menu-block">
                          <div className="row">
                            <div className="col-md-4 col-lg-4 col-sm-4">
                              <h2 className="sub-menu-head">Company</h2>
                              <ul className="sub-menu-lists">
                                <li>
                                  <a>About</a>
                                </li>
                                <li>
                                  <a>Mission</a>
                                </li>
                                <li>
                                  <a>Community</a>
                                </li>
                                <li>
                                  <a>Team</a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-4 col-lg-4 col-sm-4">
                              <h2 className="sub-menu-head">Media</h2>
                              <ul className="sub-menu-lists">
                                <li>
                                  <a>News</a>
                                </li>
                                <li>
                                  <a>Events</a>
                                </li>
                                <li>
                                  <a>Blog</a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-4 col-lg-4 col-sm-4">
                              <h2 className="sub-menu-head">Careers</h2>
                              <ul className="sub-menu-lists">
                                <li>
                                  <a>New Opportunities</a>
                                </li>
                                <li>
                                  <a>Life @ Company</a>
                                </li>
                                <li>
                                  <a>Why Join Us?</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="row banners-area">
                            <div className="col-md-6 col-lg-6 col-sm-6">
                              <img
                                src="http://devitems.com/tf/teemo-preview/teemo/img/banner/banner-menu1.jpg"
                                width="100%;"
                              />
                            </div>
                            <div className="col-md-6 col-lg-6 col-sm-6">
                              <img
                                src="http://devitems.com/tf/teemo-preview/teemo/img/banner/banner-menu1.jpg"
                                width="100%;"
                              />
                            </div>
                          </div>
                        </div>
                      </li> */}
              {/* <li className="top-level-link">
                        <a>
                          <span>Contact</span>
                        </a>
                      </li> */}
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
}
