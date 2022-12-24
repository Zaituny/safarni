import React from 'react'

import { Helmet } from 'react-helmet'

import './AttractionSearch.css'

const AttractionSearch = (props) => {
  return (
    <div className="attr-search-container">
      <Helmet>
        <title>exported project</title>
        <meta property="og:title" content="exported project" />
      </Helmet>
      <div className="attr-search-attractions-search">
        <div className="attr-search-div">
          <div className="attr-search-div001">
            <div className="attr-search-div002">
              <div className="attr-search-label">
                <span className="attr-search-text">
                  <span>Destination</span>
                </span>
              </div>
              <div className="attr-search-destination-viennaandvicinity-austria">
                <span className="attr-search-text002">
                  <span>Vienna (and vicinity), Austria</span>
                </span>
              </div>
              <img
                src="/playground_assets/svg2075-pmnq.svg"
                alt="svg2075"
                className="attr-search-svg"
              />
            </div>
            <div className="attr-search-div003">
              <div className="attr-search-div004">
                <div className="attr-search-startdate-january42023">
                  <span className="attr-search-text004">
                    <span>Jan 4</span>
                  </span>
                </div>
                <div className="attr-search-div005">
                  <span className="attr-search-text006">
                    <span>Start date</span>
                  </span>
                </div>
                <img
                  src="/playground_assets/svg2075-ccyr.svg"
                  alt="svg2075"
                  className="attr-search-svg01"
                />
              </div>
              <div className="attr-search-div006">
                <div className="attr-search-enddate-january52023">
                  <span className="attr-search-text008">
                    <span>Jan 5</span>
                  </span>
                </div>
                <div className="attr-search-div007">
                  <span className="attr-search-text010">
                    <span>End date</span>
                  </span>
                </div>
                <img
                  src="/playground_assets/svg2075-8dieh.svg"
                  alt="svg2075"
                  className="attr-search-svg02"
                />
              </div>
            </div>
            <button className="attr-search-button">
              <span className="attr-search-text012">
                <span>Search</span>
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src="/playground_assets/line1stroke2077-u19m.svg"
            alt="Line1Stroke2077"
            className="attr-search-line1stroke"
          />
        </div>
        <div className="attr-search-div008">
          <div className="attr-search-fieldset">
            <div className="attr-search-section">
              <span className="attr-search-text026">
                <span>Search for an activity</span>
              </span>
              <div className="attr-search-div009">
                <div className="attr-search-inputsearch-keyword">
                  <div className="attr-search-divplaceholder">
                    <span className="attr-search-text028">
                      <span>Enter a keyword</span>
                    </span>
                  </div>
                </div>
                <img
                  src="/playground_assets/svg2075-n0jf.svg"
                  alt="svg2075"
                  className="attr-search-svg03"
                />
              </div>
            </div>
            <div className="attr-search-section01">
              <span className="attr-search-text030">
                <span>Filter by</span>
              </span>
              <div className="attr-search-fieldset1">
                <span className="attr-search-text032">
                  <span>Cleaning and safety practices</span>
                </span>
                <div className="attr-search-div010">
                  <div className="attr-search-span"></div>
                  <div className="attr-search-label01">
                    <span className="attr-search-text034">
                      <span>Enhanced cleaning</span>
                    </span>
                    <span className="attr-search-text036">
                      <span>
                        Activity suppliers taking additional steps to clean and
                        sanitize
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="attr-search-div011">
                <span className="attr-search-text038">
                  <span>Traveler rating</span>
                </span>
                <div className="attr-search-fieldset2">
                  <div className="attr-search-label02">
                    <div className="attr-search-span01"></div>
                    <span className="attr-search-text040">
                      <span>Any</span>
                    </span>
                  </div>
                  <div className="attr-search-label03">
                    <div className="attr-search-span02"></div>
                    <span className="attr-search-text042">
                      <span>Wonderful 4.5+</span>
                    </span>
                  </div>
                  <div className="attr-search-label04">
                    <div className="attr-search-span03"></div>
                    <span className="attr-search-text044">
                      <span>Very good 4+</span>
                    </span>
                  </div>
                  <div className="attr-search-label05">
                    <div className="attr-search-span04"></div>
                    <span className="attr-search-text046">
                      <span>Good 3.5+</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="attr-search-fieldset3">
                <span className="attr-search-text048">
                  <span>Recommendations</span>
                </span>
                <div className="attr-search-div012">
                  <div className="attr-search-span05"></div>
                  <span className="attr-search-text050">
                    <span>Free cancellation</span>
                  </span>
                </div>
                <div className="attr-search-div013">
                  <div className="attr-search-span06"></div>
                  <span className="attr-search-text052">
                    <span>Deals</span>
                  </span>
                </div>
                <div className="attr-search-div014">
                  <div className="attr-search-span07"></div>
                  <span className="attr-search-text054">
                    <span>Local expert picks</span>
                  </span>
                </div>
                <div className="attr-search-div015">
                  <div className="attr-search-span08"></div>
                  <span className="attr-search-text056">
                    <span>Family friendly</span>
                  </span>
                </div>
                <div className="attr-search-div016">
                  <div className="attr-search-span09"></div>
                  <span className="attr-search-text058">
                    <span>New on Expedia</span>
                  </span>
                </div>
                <div className="attr-search-div017">
                  <div className="attr-search-span10"></div>
                  <span className="attr-search-text060">
                    <span>Selective hotel pickup</span>
                  </span>
                </div>
              </div>
              <div className="attr-search-fieldset4">
                <span className="attr-search-text062">
                  <span>Your budget</span>
                </span>
                <div className="attr-search-div018">
                  <div className="attr-search-span11"></div>
                  <span className="attr-search-text064">
                    <span>Less than $25</span>
                  </span>
                </div>
                <div className="attr-search-div019">
                  <div className="attr-search-span12"></div>
                  <span className="attr-search-text066">
                    <span>$25 to $50</span>
                  </span>
                </div>
                <div className="attr-search-div020">
                  <div className="attr-search-span13"></div>
                  <span className="attr-search-text068">
                    <span>$50 to $75</span>
                  </span>
                </div>
                <div className="attr-search-div021">
                  <div className="attr-search-span14"></div>
                  <span className="attr-search-text070">
                    <span>$75 to $100</span>
                  </span>
                </div>
                <div className="attr-search-div022">
                  <div className="attr-search-span15"></div>
                  <span className="attr-search-text072">
                    <span>Greater than $100</span>
                  </span>
                </div>
              </div>
              <div className="attr-search-fieldset5">
                <span className="attr-search-text074">
                  <span>Start time</span>
                </span>
                <div className="attr-search-div023">
                  <div className="attr-search-span16"></div>
                  <span className="attr-search-text076">
                    <span>6:00am - 12:00pm (morning)</span>
                  </span>
                </div>
                <div className="attr-search-div024">
                  <div className="attr-search-span17"></div>
                  <span className="attr-search-text078">
                    <span>12:00pm - 5:00pm (afternoon)</span>
                  </span>
                </div>
                <div className="attr-search-div025">
                  <div className="attr-search-span18"></div>
                  <span className="attr-search-text080">
                    <span>5:00pm - 12:00am (evening)</span>
                  </span>
                </div>
                <div className="attr-search-div026">
                  <div className="attr-search-span19"></div>
                  <span className="attr-search-text082">
                    <span>Any time</span>
                  </span>
                </div>
              </div>
              <div className="attr-search-fieldset6">
                <span className="attr-search-text084">
                  <span>Duration</span>
                </span>
                <div className="attr-search-div027">
                  <div className="attr-search-span20"></div>
                  <span className="attr-search-text086">
                    <span>Less than 1 hour</span>
                  </span>
                </div>
                <div className="attr-search-div028">
                  <div className="attr-search-span21"></div>
                  <span className="attr-search-text088">
                    <span>1 to 4 hours</span>
                  </span>
                </div>
                <div className="attr-search-div029">
                  <div className="attr-search-span22"></div>
                  <span className="attr-search-text090">
                    <span>4 hours to 1 day</span>
                  </span>
                </div>
                <div className="attr-search-div030">
                  <div className="attr-search-span23"></div>
                  <span className="attr-search-text092">
                    <span>More than 1 day</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="attr-search-sectionplaceholder">
            <span className="attr-search-text094">
              <span>Vienna</span>
            </span>
            <div className="attr-search-div031">
              <div className="attr-search-div032">
                <div className="attr-search-ul">
                  <div className="attr-search-li">
                    <span className="attr-search-text096"></span>
                    <div className="attr-search-div033">
                      <div className="attr-search-h3">
                        <span className="attr-search-text097">
                          <span>History &amp; culture</span>
                        </span>
                      </div>
                      <div className="attr-search-div034">
                        <span className="attr-search-text099">
                          <span>211 things to do</span>
                        </span>
                      </div>
                    </div>
                    <img
                      src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/ada28596-4fbd-4782-9986-c180899295a6?org_if_sml=1123"
                      alt="libefore2075"
                      className="attr-search-libefore"
                    />
                  </div>
                  <div className="attr-search-li1">
                    <span className="attr-search-text101"></span>
                    <div className="attr-search-div035">
                      <div className="attr-search-h301">
                        <span className="attr-search-text102">
                          <span>Tours &amp; day trips</span>
                        </span>
                      </div>
                      <div className="attr-search-div036">
                        <span className="attr-search-text104">
                          <span>284 things to do</span>
                        </span>
                      </div>
                    </div>
                    <img
                      src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/4650d2a9-187f-4f80-85f3-6fa55ab4f9ff?org_if_sml=1123"
                      alt="libefore2075"
                      className="attr-search-libefore1"
                    />
                  </div>
                  <div className="attr-search-li2">
                    <span className="attr-search-text106"></span>
                    <div className="attr-search-div037">
                      <div className="attr-search-h302">
                        <span className="attr-search-text107">
                          <span>Shows &amp; concerts</span>
                        </span>
                      </div>
                      <div className="attr-search-div038">
                        <span className="attr-search-text109">
                          <span>18 things to do</span>
                        </span>
                      </div>
                    </div>
                    <img
                      src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/adc2678b-b408-4019-b71c-b571ecb42d7d?org_if_sml=1123"
                      alt="libefore2075"
                      className="attr-search-libefore2"
                    />
                  </div>
                  <div className="attr-search-li3">
                    <span className="attr-search-text111"></span>
                    <div className="attr-search-div039">
                      <div className="attr-search-h303">
                        <span className="attr-search-text112">
                          <span>Cruises &amp; boat tours</span>
                        </span>
                      </div>
                      <div className="attr-search-div040">
                        <span className="attr-search-text114">
                          <span>2 things to do</span>
                        </span>
                      </div>
                    </div>
                    <img
                      src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/323b503b-618b-4600-b749-95eafa286f73?org_if_sml=1123"
                      alt="libefore2075"
                      className="attr-search-libefore3"
                    />
                  </div>
                  <div className="attr-search-li4">
                    <span className="attr-search-text116"></span>
                    <div className="attr-search-div041">
                      <div className="attr-search-h304">
                        <span className="attr-search-text117">
                          <span>Attractions</span>
                        </span>
                      </div>
                      <div className="attr-search-div042">
                        <span className="attr-search-text119">
                          <span>8 things to do</span>
                        </span>
                      </div>
                    </div>
                    <img
                      src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/78c42b08-7080-4483-a355-ac1d036c1ded?org_if_sml=1123"
                      alt="libefore2075"
                      className="attr-search-libefore4"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="attr-search-div043">
              <div className="attr-search-div044">
                <div className="attr-search-selectsortselect">
                  <div className="attr-search-div045">
                    <span className="attr-search-text121">
                      <span>Recommended</span>
                    </span>
                  </div>
                </div>
                <img
                  src="/playground_assets/svg2075-omuv.svg"
                  alt="svg2075"
                  className="attr-search-svg04"
                />
                <div className="attr-search-div046">
                  <span className="attr-search-text123">
                    <span>Sort By</span>
                  </span>
                </div>
              </div>
              <div className="attr-search-a">
                <span className="attr-search-text125">
                  <span>See how we pick our recommended activities</span>
                </span>
                <img
                  src="/playground_assets/svg2075-8cbf.svg"
                  alt="svg2075"
                  className="attr-search-svg05"
                />
              </div>
            </div>
            <div className="attr-search-div047">
              <span className="attr-search-text127">
                <span>Theater, shows &amp; musicals</span>
              </span>
              <div className="attr-search-section02">
                <div className="attr-search-div048">
                  <div className="attr-search-div049">
                    <div className="attr-search-div050">
                      <div className="attr-search-figure">
                        <img
                          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/f38fa44b-a01b-4394-91f3-c0aa5583d5e7?org_if_sml=183493"
                          alt="f754551a512e44cdad5837fce97c1a5fjpg2075"
                          className="attr-search-f754551a512e44cdad5837fce97c1a5fjpg"
                        />
                      </div>
                      <div className="attr-search-section03">
                        <div className="attr-search-h305">
                          <span className="attr-search-text129">
                            <span>
                              Concert in St. Anne&apos;s Church Vienna: Mozart,
                              Beethoven, Haydn and Schubert
                            </span>
                          </span>
                        </div>
                        <div className="attr-search-div051">
                          <img
                            src="/playground_assets/svg2075-yhl.svg"
                            alt="svg2075"
                            className="attr-search-svg06"
                          />
                          <span className="attr-search-text131">
                            <span>1h 10m</span>
                          </span>
                        </div>
                        <div className="attr-search-div052">
                          <span className="attr-search-text133">
                            <span>4.7/5</span>
                          </span>
                          <span className="attr-search-text135">
                            <span>(223)</span>
                          </span>
                          <div className="attr-search-moreinformationaboutreviews">
                            <div className="attr-search-frame">
                              <div className="attr-search-group">
                                <img
                                  src="/playground_assets/vector2075-m93l.svg"
                                  alt="Vector2075"
                                  className="attr-search-vector"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="attr-search-section04">
                      <span className="attr-search-text137">
                        <span>Free cancellation available</span>
                      </span>
                      <div className="attr-search-div053">
                        <span className="attr-search-text139">
                          <span>$36</span>
                        </span>
                        <span className="attr-search-text141">
                          <span>per adult</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="attr-search-div054">
                    <img
                      src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/73c2c48a-c8e4-44da-b67b-a831fcd37c58?org_if_sml=1417"
                      alt="SaveactivityConcertinStAnnesChurchViennaMozartBeet2075"
                      className="attr-search-saveactivity-concertin-st-annes-church-vienna-mozart-beet"
                    />
                    <div className="attr-search-label06">
                      <img
                        src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/92a710cf-3bcd-4c90-a74f-6998df181b0f?org_if_sml=1417"
                        alt="labelbefore2075"
                        className="attr-search-labelbefore"
                      />
                      <span className="attr-search-text143"></span>
                      <img
                        src="/playground_assets/svg2075-0tld.svg"
                        alt="svg2075"
                        className="attr-search-svg07"
                      />
                    </div>
                  </div>
                </div>
                <div className="attr-search-div055">
                  <div className="attr-search-div056">
                    <div className="attr-search-div057">
                      <div className="attr-search-figure01">
                        <img
                          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/b1933f55-55cc-44bf-ae36-d253ad23704c?org_if_sml=179982"
                          alt="b6594cbfe8c54a9ca8f9dcdbf2a9441bjpg2075"
                          className="attr-search-b6594cbfe8c54a9ca8f9dcdbf2a9441bjpg"
                        />
                      </div>
                      <div className="attr-search-section05">
                        <div className="attr-search-div058">
                          <img
                            src="/playground_assets/svg2075-9bzn.svg"
                            alt="svg2075"
                            className="attr-search-svg08"
                          />
                          <span className="attr-search-text144">
                            <span>Enhanced cleaning</span>
                          </span>
                        </div>
                        <div className="attr-search-h306">
                          <span className="attr-search-text146">
                            <span>
                              Evening in Schönbrunn: Dinner &amp; Classical
                              Concert
                            </span>
                          </span>
                        </div>
                        <div className="attr-search-div059">
                          <img
                            src="/playground_assets/svg2075-8py6.svg"
                            alt="svg2075"
                            className="attr-search-svg09"
                          />
                          <span className="attr-search-text148">
                            <span>3h 45m</span>
                          </span>
                        </div>
                        <div className="attr-search-div060">
                          <span className="attr-search-text150">
                            <span>3.9/5</span>
                          </span>
                          <span className="attr-search-text152">
                            <span>(74)</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="attr-search-section06">
                      <span className="attr-search-text154">
                        <span>Free cancellation available</span>
                      </span>
                      <div className="attr-search-div061">
                        <span className="attr-search-text156">
                          <span>$86</span>
                        </span>
                        <span className="attr-search-text158">
                          <span>per traveler</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="attr-search-div062">
                    <img
                      src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/0d9c1d18-3389-4455-8c6c-fbf61ec70a83?org_if_sml=1417"
                      alt="SaveactivityEveninginSchnbrunnDinnerClassicalConce2075"
                      className="attr-search-saveactivity-eveningin-schnbrunn-dinner-classical-conce"
                    />
                    <div className="attr-search-label07">
                      <img
                        src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/a095eaac-3ddf-4e54-9a63-7fe2bec77966?org_if_sml=1417"
                        alt="labelbefore2075"
                        className="attr-search-labelbefore01"
                      />
                      <span className="attr-search-text160"></span>
                      <img
                        src="/playground_assets/svg2075-fvcn.svg"
                        alt="svg2075"
                        className="attr-search-svg10"
                      />
                    </div>
                  </div>
                </div>
                <div className="attr-search-div063">
                  <div className="attr-search-div064">
                    <div className="attr-search-div065">
                      <div className="attr-search-figure02">
                        <img
                          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/16de1061-3a92-4ce8-b8ce-dfca35b2a7fe?org_if_sml=188855"
                          alt="IMAGE5d2dfb79dee640e3ad8b5626060e1fa0jpg2075"
                          className="attr-search-i-m-a-g-e5d2dfb79dee640e3ad8b5626060e1fa0jpg"
                        />
                      </div>
                      <div className="attr-search-section07">
                        <div className="attr-search-div066">
                          <img
                            src="/playground_assets/svg2075-sa1.svg"
                            alt="svg2075"
                            className="attr-search-svg11"
                          />
                          <span className="attr-search-text161">
                            <span>Enhanced cleaning</span>
                          </span>
                        </div>
                        <div className="attr-search-h307">
                          <span className="attr-search-text163">
                            <span>Vienna: Classical Concert at Mozarthaus</span>
                          </span>
                        </div>
                        <div className="attr-search-div067">
                          <img
                            src="/playground_assets/svg2075-2v2.svg"
                            alt="svg2075"
                            className="attr-search-svg12"
                          />
                          <span className="attr-search-text165">
                            <span>1h 30m</span>
                          </span>
                        </div>
                        <div className="attr-search-div068">
                          <span className="attr-search-text167">
                            <span>4.7/5</span>
                          </span>
                          <span className="attr-search-text169">
                            <span>(178)</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="attr-search-section08">
                      <span className="attr-search-text171">
                        <span>Free cancellation available</span>
                      </span>
                      <div className="attr-search-div069">
                        <span className="attr-search-text173">
                          <span>$63</span>
                        </span>
                        <span className="attr-search-text175">
                          <span>per adult</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="attr-search-div070">
                    <img
                      src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/5149fe65-8843-405e-87f3-f976f095fd94?org_if_sml=1417"
                      alt="SaveactivityViennaClassicalConcertatMozarthaus2075"
                      className="attr-search-saveactivity-vienna-classical-concertat-mozarthaus"
                    />
                    <div className="attr-search-label08">
                      <img
                        src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/365055e9-98fc-4ffe-864d-738d88e347a8?org_if_sml=1417"
                        alt="labelbefore2075"
                        className="attr-search-labelbefore02"
                      />
                      <span className="attr-search-text177"></span>
                      <img
                        src="/playground_assets/svg2075-rkvd.svg"
                        alt="svg2075"
                        className="attr-search-svg13"
                      />
                    </div>
                  </div>
                </div>
                <div className="attr-search-div071">
                  <div className="attr-search-div072">
                    <div className="attr-search-div073">
                      <div className="attr-search-figure03">
                        <img
                          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/2cec6996-bc98-41f1-86d2-bfc6ca898c9a?org_if_sml=167008"
                          alt="IMAGE060c269f8918428d9a28b47d72a57e02jpg2075"
                          className="attr-search-i-m-a-g-e060c269f8918428d9a28b47d72a57e02jpg"
                        />
                      </div>
                      <div className="attr-search-section09">
                        <div className="attr-search-div074">
                          <img
                            src="/playground_assets/svg2075-gnhj.svg"
                            alt="svg2075"
                            className="attr-search-svg14"
                          />
                          <span className="attr-search-text178">
                            <span>Enhanced cleaning</span>
                          </span>
                        </div>
                        <div className="attr-search-h308">
                          <span className="attr-search-text180">
                            <span>
                              Schönbrunn: Christmas Market &amp; Classical
                              Concert
                            </span>
                          </span>
                        </div>
                        <div className="attr-search-div075">
                          <img
                            src="/playground_assets/svg2075-9ti.svg"
                            alt="svg2075"
                            className="attr-search-svg15"
                          />
                          <span className="attr-search-text182">
                            <span>1d</span>
                          </span>
                        </div>
                        <div className="attr-search-div076">
                          <span className="attr-search-text184">
                            <span>4.3/5</span>
                          </span>
                          <span className="attr-search-text186">
                            <span>(14)</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="attr-search-section10">
                      <span className="attr-search-text188">
                        <span>Free cancellation available</span>
                      </span>
                      <div className="attr-search-div077">
                        <span className="attr-search-text190">
                          <span>$65</span>
                        </span>
                        <span className="attr-search-text192">
                          <span>per traveler</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="attr-search-div078">
                    <img
                      src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/a279db67-51c5-4824-b1a4-07f9b95fcf26?org_if_sml=1441"
                      alt="SaveactivitySchnbrunnChristmasMarketClassicalConce2075"
                      className="attr-search-saveactivity-schnbrunn-christmas-market-classical-conce"
                    />
                    <div className="attr-search-label09">
                      <img
                        src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/eaffbb44-58f6-4168-92ce-a18de6a6215b?org_if_sml=1441"
                        alt="labelbefore2075"
                        className="attr-search-labelbefore03"
                      />
                      <span className="attr-search-text194"></span>
                      <img
                        src="/playground_assets/svg2075-qdlb.svg"
                        alt="svg2075"
                        className="attr-search-svg16"
                      />
                    </div>
                  </div>
                </div>
                <div className="attr-search-div079">
                  <div className="attr-search-div080">
                    <div className="attr-search-div081">
                      <div className="attr-search-figure04">
                        <img
                          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/1c2dccd3-63d9-4d69-a891-1a3049037ee1?org_if_sml=147060"
                          alt="IMAGE48480e6c36f843c29b50bf6964167bd8jpg2075"
                          className="attr-search-i-m-a-g-e48480e6c36f843c29b50bf6964167bd8jpg"
                        />
                      </div>
                      <div className="attr-search-section11">
                        <div className="attr-search-div082">
                          <img
                            src="/playground_assets/svg2075-kezv.svg"
                            alt="svg2075"
                            className="attr-search-svg17"
                          />
                          <span className="attr-search-text195">
                            <span>Enhanced cleaning</span>
                          </span>
                        </div>
                        <div className="attr-search-h309">
                          <span className="attr-search-text197">
                            <span>
                              Vienna: After-Hours Palace Tour &amp; Concert in
                              Schoenbrunn
                            </span>
                          </span>
                        </div>
                        <div className="attr-search-div083">
                          <img
                            src="/playground_assets/svg2075-5bm9.svg"
                            alt="svg2075"
                            className="attr-search-svg18"
                          />
                          <span className="attr-search-text199">
                            <span>5h</span>
                          </span>
                        </div>
                        <div className="attr-search-div084">
                          <span className="attr-search-text201">
                            <span>4.4/5</span>
                          </span>
                          <span className="attr-search-text203">
                            <span>(3)</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="attr-search-section12">
                      <span className="attr-search-text205">
                        <span>Free cancellation available</span>
                      </span>
                      <div className="attr-search-div085">
                        <span className="attr-search-text207">
                          <span>$69</span>
                        </span>
                        <span className="attr-search-text209">
                          <span>per adult</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="attr-search-div086">
                    <img
                      src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/f7ef0e7e-6d6d-4959-9e57-6b0593645187?org_if_sml=1441"
                      alt="SaveactivityViennaAfterHoursPalaceTourConcertinSch2075"
                      className="attr-search-saveactivity-vienna-after-hours-palace-tour-concertin-sch"
                    />
                    <div className="attr-search-label10">
                      <img
                        src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/de1fd291-82ab-49dc-8d65-ad7a31954792?org_if_sml=1441"
                        alt="labelbefore2075"
                        className="attr-search-labelbefore04"
                      />
                      <span className="attr-search-text211"></span>
                      <img
                        src="/playground_assets/svg2075-u63s.svg"
                        alt="svg2075"
                        className="attr-search-svg19"
                      />
                    </div>
                  </div>
                </div>
                <div className="attr-search-div087">
                  <div className="attr-search-div088">
                    <div className="attr-search-div089">
                      <div className="attr-search-figure05">
                        <img
                          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/20d73816-f380-41a1-9f4f-4495f7342e83?org_if_sml=168277"
                          alt="c16c2152843a403ab1428170cd8d5063jpg2075"
                          className="attr-search-c16c2152843a403ab1428170cd8d5063jpg"
                        />
                      </div>
                      <div className="attr-search-section13">
                        <div className="attr-search-div090">
                          <img
                            src="/playground_assets/svg2075-b2fq.svg"
                            alt="svg2075"
                            className="attr-search-svg20"
                          />
                          <span className="attr-search-text212">
                            <span>Enhanced cleaning</span>
                          </span>
                        </div>
                        <div className="attr-search-h310">
                          <span className="attr-search-text214">
                            <span>
                              Vienna: Mozart&amp;Strauss Concert in Schoenbrunn
                            </span>
                          </span>
                        </div>
                        <div className="attr-search-div091">
                          <img
                            src="/playground_assets/svg2075-5jr8.svg"
                            alt="svg2075"
                            className="attr-search-svg21"
                          />
                          <span className="attr-search-text216">
                            <span>1h 45m</span>
                          </span>
                        </div>
                        <div className="attr-search-div092">
                          <span className="attr-search-text218">
                            <span>4.1/5</span>
                          </span>
                          <span className="attr-search-text220">
                            <span>(105)</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="attr-search-section14">
                      <span className="attr-search-text222">
                        <span>Free cancellation available</span>
                      </span>
                      <div className="attr-search-div093">
                        <span className="attr-search-text224">
                          <span>$48</span>
                        </span>
                        <span className="attr-search-text226">
                          <span>per traveler</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="attr-search-div094">
                    <img
                      src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/479acd31-57ec-470e-83d9-7c1980559838?org_if_sml=1441"
                      alt="SaveactivityViennaMozartStraussConcertinSchoenbrun2075"
                      className="attr-search-saveactivity-vienna-mozart-strauss-concertin-schoenbrun"
                    />
                    <div className="attr-search-label11">
                      <img
                        src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/ca42022c-dfbe-4179-af02-db7b731bfb78?org_if_sml=1441"
                        alt="labelbefore2075"
                        className="attr-search-labelbefore05"
                      />
                      <span className="attr-search-text228"></span>
                      <img
                        src="/playground_assets/svg2075-chsj.svg"
                        alt="svg2075"
                        className="attr-search-svg22"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="attr-search-a1">
                <span className="attr-search-text229">
                  <span>See all 18 activities</span>
                </span>
              </div>
            </div>
            <div className="attr-search-div095">
              <span className="attr-search-text231">
                <span>Attraction tickets</span>
              </span>
              <div className="attr-search-section15">
                <div className="attr-search-div096">
                  <div className="attr-search-div097">
                    <div className="attr-search-div098">
                      <div className="attr-search-figure06">
                        <img
                          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/43bb63ee-c165-48af-a352-2cb5068354ed?org_if_sml=164916"
                          alt="f53784ead29140e4a0eb0f9ea7afd14ajpg2075"
                          className="attr-search-f53784ead29140e4a0eb0f9ea7afd14ajpg"
                        />
                      </div>
                      <div className="attr-search-section16">
                        <div className="attr-search-div099">
                          <img
                            src="/playground_assets/svg2075-1m3j.svg"
                            alt="svg2075"
                            className="attr-search-svg23"
                          />
                          <span className="attr-search-text233">
                            <span>Enhanced cleaning</span>
                          </span>
                        </div>
                        <div className="attr-search-h311">
                          <span className="attr-search-text235">
                            <span>Vienna City Card</span>
                          </span>
                        </div>
                        <div className="attr-search-div100">
                          <img
                            src="/playground_assets/svg2075-8bi.svg"
                            alt="svg2075"
                            className="attr-search-svg24"
                          />
                          <span className="attr-search-text237">
                            <span>1d+</span>
                          </span>
                        </div>
                        <div className="attr-search-div101">
                          <span className="attr-search-text239">
                            <span>4.0/5</span>
                          </span>
                          <span className="attr-search-text241">
                            <span>(111)</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="attr-search-section17">
                      <span className="attr-search-text243">
                        <span>Free cancellation available</span>
                      </span>
                      <div className="attr-search-div102">
                        <span className="attr-search-text245">
                          <span>$19</span>
                        </span>
                        <span className="attr-search-text247">
                          <span>per traveler</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="attr-search-div103">
                    <img
                      src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/f7356f48-df1f-4e82-96a3-2fa83bea724b?org_if_sml=1447"
                      alt="SaveactivityViennaCityCard2075"
                      className="attr-search-saveactivity-vienna-city-card"
                    />
                    <div className="attr-search-label12">
                      <img
                        src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/19efb21f-e000-4ddb-97f8-d1bf7baa4129?org_if_sml=1447"
                        alt="labelbefore2075"
                        className="attr-search-labelbefore06"
                      />
                      <span className="attr-search-text249"></span>
                      <img
                        src="/playground_assets/svg2075-f2bn.svg"
                        alt="svg2075"
                        className="attr-search-svg25"
                      />
                    </div>
                  </div>
                </div>
                <div className="attr-search-div104">
                  <div className="attr-search-div105">
                    <div className="attr-search-div106">
                      <div className="attr-search-figure07">
                        <img
                          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/cb417442-7864-43ef-8764-0bc26dc4494b?org_if_sml=169877"
                          alt="IMAGE4e7f3da7c7e045e38fb911b4518e71b5jpg2075"
                          className="attr-search-i-m-a-g-e4e7f3da7c7e045e38fb911b4518e71b5jpg"
                        />
                      </div>
                      <div className="attr-search-section18">
                        <div className="attr-search-h312">
                          <span className="attr-search-text250">
                            <span>
                              Kunsthistorisches Museum Vienna and Imperial
                              Treasury of Vienna
                            </span>
                          </span>
                        </div>
                        <div className="attr-search-div107">
                          <img
                            src="/playground_assets/svg2075-m08y.svg"
                            alt="svg2075"
                            className="attr-search-svg26"
                          />
                          <span className="attr-search-text252">
                            <span>3m</span>
                          </span>
                        </div>
                        <div className="attr-search-div108">
                          <span className="attr-search-text254">
                            <span>4.5/5</span>
                          </span>
                          <span className="attr-search-text256">
                            <span>(13)</span>
                          </span>
                          <div className="attr-search-moreinformationaboutreviews1">
                            <div className="attr-search-frame1">
                              <div className="attr-search-group1">
                                <img
                                  src="/playground_assets/vector2075-56oo.svg"
                                  alt="Vector2075"
                                  className="attr-search-vector1"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="attr-search-section19">
                      <span className="attr-search-text258">
                        <span>Free cancellation available</span>
                      </span>
                      <div className="attr-search-div109">
                        <span className="attr-search-text260">
                          <span>$26</span>
                        </span>
                        <span className="attr-search-text262">
                          <span>per adult</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="attr-search-div110">
                    <img
                      src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/80ef4e04-02b4-48dd-8c0b-ed1935152e34?org_if_sml=1447"
                      alt="SaveactivityKunsthistorischesMuseumViennaandImperi2075"
                      className="attr-search-saveactivity-kunsthistorisches-museum-viennaand-imperi"
                    />
                    <div className="attr-search-label13">
                      <img
                        src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/6684db18-f977-4bdf-abe4-2b1b3bc39ef7?org_if_sml=1447"
                        alt="labelbefore2075"
                        className="attr-search-labelbefore07"
                      />
                      <span className="attr-search-text264"></span>
                      <img
                        src="/playground_assets/svg2075-8qz3.svg"
                        alt="svg2075"
                        className="attr-search-svg27"
                      />
                    </div>
                  </div>
                </div>
                <div className="attr-search-div111">
                  <div className="attr-search-div112">
                    <div className="attr-search-div113">
                      <div className="attr-search-figure08">
                        <img
                          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/d65c6d00-6d99-4631-ab9a-8837b6eea87d?org_if_sml=173044"
                          alt="IMAGE326fbaa75e7c48039c6dbdd2f6ba7fbcjpg2075"
                          className="attr-search-i-m-a-g-e326fbaa75e7c48039c6dbdd2f6ba7fbcjpg"
                        />
                      </div>
                      <div className="attr-search-section20">
                        <div className="attr-search-div114">
                          <img
                            src="/playground_assets/svg2075-ciml.svg"
                            alt="svg2075"
                            className="attr-search-svg28"
                          />
                          <span className="attr-search-text265">
                            <span>Enhanced cleaning</span>
                          </span>
                        </div>
                        <div className="attr-search-h313">
                          <span className="attr-search-text267">
                            <span>
                              Hard Rock Cafe Vienna Dining with Priority Seating
                            </span>
                          </span>
                        </div>
                        <div className="attr-search-div115">
                          <img
                            src="/playground_assets/svg2076-4suq.svg"
                            alt="svg2076"
                            className="attr-search-svg29"
                          />
                          <span className="attr-search-text269">
                            <span>1d</span>
                          </span>
                        </div>
                        <div className="attr-search-div116">
                          <span className="attr-search-text271">
                            <span>4.6/5</span>
                          </span>
                          <span className="attr-search-text273">
                            <span>(47)</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="attr-search-section21">
                      <span className="attr-search-text275">
                        <span>Free cancellation available</span>
                      </span>
                      <div className="attr-search-div117">
                        <span className="attr-search-text277">
                          <span>$27</span>
                        </span>
                        <span className="attr-search-text279">
                          <span>per adult</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="attr-search-div118">
                    <img
                      src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/54a5c5b8-5823-42a4-8005-dbd68ec96d87?org_if_sml=1447"
                      alt="SaveactivityHardRockCafeViennaDiningwithPrioritySe2076"
                      className="attr-search-saveactivity-hard-rock-cafe-vienna-diningwith-priority-se"
                    />
                    <div className="attr-search-label14">
                      <img
                        src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/b8233615-88b1-49c7-87d1-b7cea1d6f81d?org_if_sml=1447"
                        alt="labelbefore2076"
                        className="attr-search-labelbefore08"
                      />
                      <span className="attr-search-text281"></span>
                      <img
                        src="/playground_assets/svg2076-4p4z.svg"
                        alt="svg2076"
                        className="attr-search-svg30"
                      />
                    </div>
                  </div>
                </div>
                <div className="attr-search-div119">
                  <div className="attr-search-div120">
                    <div className="attr-search-div121">
                      <div className="attr-search-figure09">
                        <img
                          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/c4ae30ae-4976-4515-b516-6dd800d35b71?org_if_sml=161978"
                          alt="IMAGE0ac2d254b1014499a784fbe4c71b1b71jpg2076"
                          className="attr-search-i-m-a-g-e0ac2d254b1014499a784fbe4c71b1b71jpg"
                        />
                      </div>
                      <div className="attr-search-section22">
                        <div className="attr-search-div122">
                          <img
                            src="/playground_assets/svg2076-egl.svg"
                            alt="svg2076"
                            className="attr-search-svg31"
                          />
                          <span className="attr-search-text282">
                            <span>Enhanced cleaning</span>
                          </span>
                        </div>
                        <div className="attr-search-h314">
                          <span className="attr-search-text284">
                            <span>Vienna House of Music Entrance Ticket</span>
                          </span>
                        </div>
                        <div className="attr-search-div123">
                          <img
                            src="/playground_assets/svg2076-6py.svg"
                            alt="svg2076"
                            className="attr-search-svg32"
                          />
                          <span className="attr-search-text286">
                            <span>2h</span>
                          </span>
                        </div>
                        <div className="attr-search-div124">
                          <span className="attr-search-text288">
                            <span>4.5/5</span>
                          </span>
                          <span className="attr-search-text290">
                            <span>(13)</span>
                          </span>
                          <div className="attr-search-moreinformationaboutreviews2">
                            <div className="attr-search-frame2">
                              <div className="attr-search-group2">
                                <img
                                  src="/playground_assets/vector2076-sgzi.svg"
                                  alt="Vector2076"
                                  className="attr-search-vector2"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="attr-search-section23">
                      <span className="attr-search-text292">
                        <span>Free cancellation available</span>
                      </span>
                      <div className="attr-search-div125">
                        <span className="attr-search-text294">
                          <span>$17</span>
                        </span>
                        <span className="attr-search-text296">
                          <span>per adult</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="attr-search-div126">
                    <img
                      src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/6f69d319-feb0-4f92-8a73-fd4788f86eec?org_if_sml=1452"
                      alt="SaveactivityViennaHouseofMusicEntranceTicket2076"
                      className="attr-search-saveactivity-vienna-houseof-music-entrance-ticket"
                    />
                    <div className="attr-search-label15">
                      <img
                        src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/dadb1842-58e0-4a8e-8482-f5dbad53432a?org_if_sml=1452"
                        alt="labelbefore2076"
                        className="attr-search-labelbefore09"
                      />
                      <span className="attr-search-text298"></span>
                      <img
                        src="/playground_assets/svg2076-97m.svg"
                        alt="svg2076"
                        className="attr-search-svg33"
                      />
                    </div>
                  </div>
                </div>
                <div className="attr-search-div127">
                  <div className="attr-search-div128">
                    <div className="attr-search-div129">
                      <div className="attr-search-figure10">
                        <img
                          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/80bb87b3-0765-4a8f-89c9-2b72d6ffa086?org_if_sml=170398"
                          alt="d9e3ab5f35704440a5b728eba132a6bdjpg2076"
                          className="attr-search-d9e3ab5f35704440a5b728eba132a6bdjpg"
                        />
                      </div>
                      <div className="attr-search-section24">
                        <div className="attr-search-h315">
                          <span className="attr-search-text299">
                            <span>
                              Skip the Line: Kunsthistorisches Museum Vienna
                              Entrance Ticket
                            </span>
                          </span>
                        </div>
                        <div className="attr-search-div130">
                          <img
                            src="/playground_assets/svg2076-i5sn.svg"
                            alt="svg2076"
                            className="attr-search-svg34"
                          />
                          <span className="attr-search-text301">
                            <span>1h</span>
                          </span>
                        </div>
                        <div className="attr-search-div131">
                          <span className="attr-search-text303">
                            <span>3.5/5</span>
                          </span>
                          <span className="attr-search-text305">
                            <span>(6)</span>
                          </span>
                          <div className="attr-search-moreinformationaboutreviews3">
                            <div className="attr-search-frame3">
                              <div className="attr-search-group3">
                                <img
                                  src="/playground_assets/vector2076-n1uj.svg"
                                  alt="Vector2076"
                                  className="attr-search-vector3"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="attr-search-section25">
                      <span className="attr-search-text307">
                        <span>Free cancellation available</span>
                      </span>
                      <div className="attr-search-div132">
                        <span className="attr-search-text309">
                          <span>$20</span>
                        </span>
                        <span className="attr-search-text311">
                          <span>per adult</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="attr-search-div133">
                    <img
                      src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/ad7a8ead-c50e-48d0-8dea-f71cd09d87b0?org_if_sml=1452"
                      alt="SaveactivitySkiptheLineKunsthistorischesMuseumVien2076"
                      className="attr-search-saveactivity-skipthe-line-kunsthistorisches-museum-vien"
                    />
                    <div className="attr-search-label16">
                      <img
                        src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/eda873a5-7c0a-4a51-b3e7-76ab52b14817?org_if_sml=1452"
                        alt="labelbefore2076"
                        className="attr-search-labelbefore10"
                      />
                      <span className="attr-search-text313"></span>
                      <img
                        src="/playground_assets/svg2076-l78.svg"
                        alt="svg2076"
                        className="attr-search-svg35"
                      />
                    </div>
                  </div>
                </div>
                <div className="attr-search-div134">
                  <div className="attr-search-div135">
                    <div className="attr-search-div136">
                      <div className="attr-search-figure11">
                        <img
                          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/79eb71e8-7fca-4968-acd9-5d0cdb69705d?org_if_sml=170260"
                          alt="IMAGE979edbedd87b4c74bbbe1098a68e3e94jpg2076"
                          className="attr-search-i-m-a-g-e979edbedd87b4c74bbbe1098a68e3e94jpg"
                        />
                      </div>
                      <div className="attr-search-section26">
                        <div className="attr-search-div137">
                          <img
                            src="/playground_assets/svg2076-4qzn.svg"
                            alt="svg2076"
                            className="attr-search-svg36"
                          />
                          <span className="attr-search-text314">
                            <span>Enhanced cleaning</span>
                          </span>
                        </div>
                        <div className="attr-search-h316">
                          <span className="attr-search-text316">
                            <span>Skip the Line: Weltmuseum Wien Ticket</span>
                          </span>
                        </div>
                        <div className="attr-search-div138">
                          <img
                            src="/playground_assets/svg2076-00w4.svg"
                            alt="svg2076"
                            className="attr-search-svg37"
                          />
                          <span className="attr-search-text318">
                            <span>2h</span>
                          </span>
                        </div>
                        <div className="attr-search-div139">
                          <span className="attr-search-text320">
                            <span>3.0/5</span>
                          </span>
                          <span className="attr-search-text322">
                            <span>(1)</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="attr-search-section27">
                      <span className="attr-search-text324">
                        <span>Free cancellation available</span>
                      </span>
                      <div className="attr-search-div140">
                        <span className="attr-search-text326">
                          <span>$17</span>
                        </span>
                        <span className="attr-search-text328">
                          <span>per adult</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="attr-search-div141">
                    <img
                      src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/9dca493b-0c13-4486-8d4f-809251cb2c86?org_if_sml=1452"
                      alt="SaveactivitySkiptheLineWeltmuseumWienTicket2076"
                      className="attr-search-saveactivity-skipthe-line-weltmuseum-wien-ticket"
                    />
                    <div className="attr-search-label17">
                      <img
                        src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/06da3316-93e6-445b-92fd-1e03fc2c0753?org_if_sml=1452"
                        alt="labelbefore2076"
                        className="attr-search-labelbefore11"
                      />
                      <span className="attr-search-text330"></span>
                      <img
                        src="/playground_assets/svg2076-g78.svg"
                        alt="svg2076"
                        className="attr-search-svg38"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="attr-search-a2">
                <span className="attr-search-text331">
                  <span>See all 8 activities</span>
                </span>
              </div>
            </div>
            <div className="attr-search-div142">
              <span className="attr-search-text333">
                <span>Continue exploring Vienna</span>
              </span>
              <div className="attr-search-section28">
                <div className="attr-search-div143">
                  <div className="attr-search-div144">
                    <div className="attr-search-div145">
                      <div className="attr-search-figure12">
                        <img
                          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/eac496cd-aa19-4ad5-8b37-7bcc087ff89c?org_if_sml=162847"
                          alt="IMAGE95ae3ce2c6e9489384ae2018703f676ajpg2076"
                          className="attr-search-i-m-a-g-e95ae3ce2c6e9489384ae2018703f676ajpg"
                        />
                      </div>
                      <div className="attr-search-section29">
                        <div className="attr-search-div146">
                          <img
                            src="/playground_assets/svg2076-2g2p.svg"
                            alt="svg2076"
                            className="attr-search-svg39"
                          />
                          <span className="attr-search-text335">
                            <span>Enhanced cleaning</span>
                          </span>
                        </div>
                        <div className="attr-search-h317">
                          <span className="attr-search-text337">
                            <span>Day Trip to Vienna from Prague</span>
                          </span>
                        </div>
                        <div className="attr-search-div147">
                          <img
                            src="/playground_assets/svg2076-32ld.svg"
                            alt="svg2076"
                            className="attr-search-svg40"
                          />
                          <span className="attr-search-text339">
                            <span>13h</span>
                          </span>
                        </div>
                        <div className="attr-search-div148">
                          <span className="attr-search-text341">
                            <span>2.5/5</span>
                          </span>
                          <span className="attr-search-text343">
                            <span>(30)</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="attr-search-section30">
                      <span className="attr-search-text345">
                        <span>Free cancellation available</span>
                      </span>
                      <div className="attr-search-div149">
                        <span className="attr-search-text347">
                          <span>$173</span>
                        </span>
                        <span className="attr-search-text349">
                          <span>per adult</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="attr-search-div150">
                    <img
                      src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/9436ab04-523d-4b60-9bd4-5480733e39ea?org_if_sml=1416"
                      alt="SaveactivityDayTriptoViennafromPrague2076"
                      className="attr-search-saveactivity-day-tripto-viennafrom-prague"
                    />
                    <div className="attr-search-label18">
                      <img
                        src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/f17979f3-359f-46bd-b8d5-55f170475f87?org_if_sml=1416"
                        alt="labelbefore2076"
                        className="attr-search-labelbefore12"
                      />
                      <span className="attr-search-text351"></span>
                      <img
                        src="/playground_assets/svg2076-im3.svg"
                        alt="svg2076"
                        className="attr-search-svg41"
                      />
                    </div>
                  </div>
                </div>
                <div className="attr-search-div151">
                  <div className="attr-search-div152">
                    <div className="attr-search-div153">
                      <div className="attr-search-figure13">
                        <img
                          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/86ae6016-acae-44df-8c25-bd98877fd569?org_if_sml=171969"
                          alt="IMAGE3d3fdcbbb872496e98a4ff504c567d77jpg2076"
                          className="attr-search-i-m-a-g-e3d3fdcbbb872496e98a4ff504c567d77jpg"
                        />
                      </div>
                      <div className="attr-search-section31">
                        <div className="attr-search-h318">
                          <span className="attr-search-text352">
                            <span>
                              Belvedere Palace 2.5-Hour Small-Group History Tour
                              in Vienna
                            </span>
                          </span>
                        </div>
                        <div className="attr-search-div154">
                          <img
                            src="/playground_assets/svg2076-a4b8.svg"
                            alt="svg2076"
                            className="attr-search-svg42"
                          />
                          <span className="attr-search-text354">
                            <span>2h 30m</span>
                          </span>
                        </div>
                        <div className="attr-search-div155">
                          <span className="attr-search-text356">
                            <span>4.9/5</span>
                          </span>
                          <span className="attr-search-text358">
                            <span>(16)</span>
                          </span>
                          <div className="attr-search-moreinformationaboutreviews4">
                            <div className="attr-search-frame4">
                              <div>
                                <img
                                  src="/playground_assets/vector2076-bk8l.svg"
                                  alt="Vector2076"
                                  className="attr-search-vector4"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="attr-search-section32">
                      <span className="attr-search-text360">
                        <span>Free cancellation available</span>
                      </span>
                      <span className="attr-search-text362">
                        <span>
                          *Get a lower price by selecting multiple adult tickets
                        </span>
                      </span>
                      <div className="attr-search-div156">
                        <span className="attr-search-text364">
                          <span>$210</span>
                        </span>
                        <span className="attr-search-text366">
                          <span>per adult*</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="attr-search-div157">
                    <img
                      src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/d37d36a6-3c23-41ee-ab80-ac05a868a080?org_if_sml=1416"
                      alt="SaveactivityBelvederePalace25HourSmallGroupHistory2076"
                      className="attr-search-saveactivity-belvedere-palace25hour-small-group-history"
                    />
                    <div className="attr-search-label19">
                      <img
                        src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/a1237d10-5da9-4549-8bc4-1d3db252e923?org_if_sml=1416"
                        alt="labelbefore2076"
                        className="attr-search-labelbefore13"
                      />
                      <span className="attr-search-text368"></span>
                      <img
                        src="/playground_assets/svg2076-k4ts.svg"
                        alt="svg2076"
                        className="attr-search-svg43"
                      />
                    </div>
                  </div>
                </div>
                <div className="attr-search-div158">
                  <div className="attr-search-div159">
                    <div className="attr-search-div160">
                      <div className="attr-search-figure14">
                        <img
                          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/b288dde4-1757-4e6d-8fe5-488f3edff532?org_if_sml=179637"
                          alt="IMAGE4f453244c81847aeb616e40a6d34dacejpg2076"
                          className="attr-search-i-m-a-g-e4f453244c81847aeb616e40a6d34dacejpg"
                        />
                      </div>
                      <div className="attr-search-section33">
                        <div className="attr-search-div161">
                          <img
                            src="/playground_assets/svg2076-rwn8.svg"
                            alt="svg2076"
                            className="attr-search-svg44"
                          />
                          <span className="attr-search-text369">
                            <span>Enhanced cleaning</span>
                          </span>
                        </div>
                        <div className="attr-search-h319">
                          <span className="attr-search-text371">
                            <span>
                              Bratislava Small Group Half-Day Trip from Vienna
                            </span>
                          </span>
                        </div>
                        <div className="attr-search-div162">
                          <img
                            src="/playground_assets/svg2076-e8rs.svg"
                            alt="svg2076"
                            className="attr-search-svg45"
                          />
                          <span className="attr-search-text373">
                            <span>7h</span>
                          </span>
                        </div>
                        <div className="attr-search-div163">
                          <span className="attr-search-text375">
                            <span>3.3/5</span>
                          </span>
                          <span className="attr-search-text377">
                            <span>(16)</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="attr-search-section34">
                      <span className="attr-search-text379">
                        <span>Free cancellation available</span>
                      </span>
                      <div className="attr-search-div164">
                        <span className="attr-search-text381">
                          <span>$138</span>
                        </span>
                        <span className="attr-search-text383">
                          <span>per traveler</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="attr-search-div165">
                    <img
                      src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/8e36df86-f6b7-4dad-a596-27f9ca29acd1?org_if_sml=1416"
                      alt="SaveactivityBratislavaSmallGroupHalfDayTripfromVie2076"
                      className="attr-search-saveactivity-bratislava-small-group-half-day-tripfrom-vie"
                    />
                    <div className="attr-search-label20">
                      <img
                        src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/50eef9ae-9522-4bbf-bdf8-61f2a7a5e44c?org_if_sml=1416"
                        alt="labelbefore2076"
                        className="attr-search-labelbefore14"
                      />
                      <span className="attr-search-text385"></span>
                      <img
                        src="/playground_assets/svg2076-wx75.svg"
                        alt="svg2076"
                        className="attr-search-svg46"
                      />
                    </div>
                  </div>
                </div>
                <div className="attr-search-div166">
                  <div className="attr-search-div167">
                    <div className="attr-search-div168">
                      <div className="attr-search-figure15">
                        <img
                          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/b0ac2081-3395-476c-adcc-a9eb7d37e145?org_if_sml=163753"
                          alt="IMAGE0bc33498ca5845729162dfb3a816a1cajpg2076"
                          className="attr-search-i-m-a-g-e0bc33498ca5845729162dfb3a816a1cajpg"
                        />
                      </div>
                      <div className="attr-search-section35">
                        <div className="attr-search-div169">
                          <img
                            src="/playground_assets/svg2076-v73i.svg"
                            alt="svg2076"
                            className="attr-search-svg47"
                          />
                          <span className="attr-search-text386">
                            <span>Enhanced cleaning</span>
                          </span>
                        </div>
                        <div className="attr-search-h320">
                          <span className="attr-search-text388">
                            <span>
                              Hallstatt and Alps Day Trip from Vienna With
                              Skywalk
                            </span>
                          </span>
                        </div>
                        <div className="attr-search-div170">
                          <img
                            src="/playground_assets/svg2076-v8oo.svg"
                            alt="svg2076"
                            className="attr-search-svg48"
                          />
                          <span className="attr-search-text390">
                            <span>13h</span>
                          </span>
                        </div>
                        <div className="attr-search-div171">
                          <span className="attr-search-text392">
                            <span>4.6/5</span>
                          </span>
                          <span className="attr-search-text394">
                            <span>(79)</span>
                          </span>
                          <div className="attr-search-moreinformationaboutreviews5">
                            <div className="attr-search-frame5">
                              <div className="attr-search-group5 attr-search-group5">
                                <img
                                  src="/playground_assets/vector2076-33ui.svg"
                                  alt="Vector2076"
                                  className="attr-search-vector5"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="attr-search-section36">
                      <span className="attr-search-text396">
                        <span>Free cancellation available</span>
                      </span>
                      <div className="attr-search-div172">
                        <span className="attr-search-text398">
                          <span>$137</span>
                        </span>
                        <span className="attr-search-text400">
                          <span>per adult</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="attr-search-div173">
                    <img
                      src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/794220e3-2a0a-469d-892a-01de6503530d?org_if_sml=1452"
                      alt="SaveactivityHallstattandAlpsDayTripfromViennaWithS2076"
                      className="attr-search-saveactivity-hallstattand-alps-day-tripfrom-vienna-with-s"
                    />
                    <div className="attr-search-label21">
                      <img
                        src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/50a86382-68a9-4b02-990e-4f51fdb73eb2?org_if_sml=1452"
                        alt="labelbefore2076"
                        className="attr-search-labelbefore15"
                      />
                      <span className="attr-search-text402"></span>
                      <img
                        src="/playground_assets/svg2076-3amj.svg"
                        alt="svg2076"
                        className="attr-search-svg49"
                      />
                    </div>
                  </div>
                </div>
                <div className="attr-search-div174">
                  <div className="attr-search-div175">
                    <div className="attr-search-div176">
                      <div className="attr-search-figure16">
                        <img
                          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/538f7c48-0851-4359-9151-25db40d62d20?org_if_sml=178593"
                          alt="IMAGE58c7d717026340c1b18d8183a348df80jpg2076"
                          className="attr-search-i-m-a-g-e58c7d717026340c1b18d8183a348df80jpg"
                        />
                      </div>
                      <div className="attr-search-section37">
                        <div className="attr-search-div177">
                          <img
                            src="/playground_assets/svg2076-43p.svg"
                            alt="svg2076"
                            className="attr-search-svg50"
                          />
                          <span className="attr-search-text403">
                            <span>Enhanced cleaning</span>
                          </span>
                        </div>
                        <div className="attr-search-h321">
                          <span className="attr-search-text405">
                            <span>Nabiel&apos;s Vienna Cooking Class</span>
                          </span>
                        </div>
                        <div className="attr-search-div178">
                          <img
                            src="/playground_assets/svg2076-vsp9.svg"
                            alt="svg2076"
                            className="attr-search-svg51"
                          />
                          <span className="attr-search-text407">
                            <span>3h</span>
                          </span>
                        </div>
                        <div className="attr-search-div179">
                          <span className="attr-search-text409">
                            <span>5.0/5</span>
                          </span>
                          <span className="attr-search-text411">
                            <span>(26)</span>
                          </span>
                          <div className="attr-search-moreinformationaboutreviews6">
                            <div className="attr-search-frame6">
                              <div className="attr-search-group6">
                                <img
                                  src="/playground_assets/vector2076-mr9.svg"
                                  alt="Vector2076"
                                  className="attr-search-vector6"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="attr-search-section38">
                      <span className="attr-search-text413">
                        <span>Free cancellation available</span>
                      </span>
                      <div className="attr-search-div180">
                        <span className="attr-search-text415">
                          <span>$160</span>
                        </span>
                        <span className="attr-search-text417">
                          <span>per adult</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="attr-search-div181">
                    <img
                      src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/b4e0e84c-c7e7-4616-8178-56e8b9f9c81f?org_if_sml=1452"
                      alt="SaveactivityNabielsViennaCookingClass2076"
                      className="attr-search-saveactivity-nabiels-vienna-cooking-class"
                    />
                    <div className="attr-search-label22">
                      <img
                        src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/90f004b1-fd94-4d2c-8878-eaf75b36552b?org_if_sml=1452"
                        alt="labelbefore2076"
                        className="attr-search-labelbefore16"
                      />
                      <span className="attr-search-text419"></span>
                      <img
                        src="/playground_assets/svg2076-lyzf.svg"
                        alt="svg2076"
                        className="attr-search-svg52"
                      />
                    </div>
                  </div>
                </div>
                <div className="attr-search-div182">
                  <div className="attr-search-div183">
                    <div className="attr-search-div184">
                      <div className="attr-search-figure17">
                        <img
                          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/39af63ca-6d57-49a9-9501-bdccdf946698?org_if_sml=175787"
                          alt="IMAGE8915f54c5ca0422a811ef75ae03bef2ejpg2076"
                          className="attr-search-i-m-a-g-e8915f54c5ca0422a811ef75ae03bef2ejpg"
                        />
                      </div>
                      <div className="attr-search-section39">
                        <div className="attr-search-div185">
                          <img
                            src="/playground_assets/svg2076-pn78.svg"
                            alt="svg2076"
                            className="attr-search-svg53"
                          />
                          <span className="attr-search-text420">
                            <span>Enhanced cleaning</span>
                          </span>
                        </div>
                        <div className="attr-search-h322">
                          <span className="attr-search-text422">
                            <span>
                              Vienna: Guided Walking Tour of City Center
                              Highlights
                            </span>
                          </span>
                        </div>
                        <div className="attr-search-div186">
                          <img
                            src="/playground_assets/svg2076-y188.svg"
                            alt="svg2076"
                            className="attr-search-svg54"
                          />
                          <span className="attr-search-text424">
                            <span>2h</span>
                          </span>
                        </div>
                        <div className="attr-search-div187">
                          <span className="attr-search-text426">
                            <span>4.7/5</span>
                          </span>
                          <span className="attr-search-text428">
                            <span>(63)</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="attr-search-section40">
                      <span className="attr-search-text430">
                        <span>Free cancellation available</span>
                      </span>
                      <div className="attr-search-div188">
                        <span className="attr-search-text432">
                          <span>$22</span>
                        </span>
                        <span className="attr-search-text434">
                          <span>per adult</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="attr-search-div189">
                    <img
                      src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/fb89da24-847d-4efd-8491-7e2f9dec41c2?org_if_sml=1452"
                      alt="SaveactivityViennaGuidedWalkingTourofCityCenterHig2076"
                      className="attr-search-saveactivity-vienna-guided-walking-tourof-city-center-hig"
                    />
                    <div className="attr-search-label23">
                      <img
                        src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d69c5c7a-a9f6-4fbf-89b5-61967d18275e/9769909f-ec47-4f81-8616-d5fa57779f35?org_if_sml=1452"
                        alt="labelbefore2076"
                        className="attr-search-labelbefore17"
                      />
                      <span className="attr-search-text436"></span>
                      <img
                        src="/playground_assets/svg2076-9q1p.svg"
                        alt="svg2076"
                        className="attr-search-svg55"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="attr-search-a3">
                <span className="attr-search-text437">
                  <span>See all things to do in Vienna</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="attr-search-group20">
          <span className="attr-search-text439">
            <span>Tell us how we can improve our site</span>
          </span>
          <div className="attr-search-sharefeedback-thislinkwillopeninanewtab">
            <span className="attr-search-text441">
              <span>Share feedback</span>
            </span>
          </div>
        </div>
        <div className="attr-search-group4 attr-search-group4">
          <img
            src="/playground_assets/line8stroke2077-paoh.svg"
            alt="Line8Stroke2077"
            className="attr-search-line8stroke"
          />
        </div>
      </div>
    </div>
  )
}

export default AttractionSearch;
