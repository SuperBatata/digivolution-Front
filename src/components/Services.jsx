import consult from "../assets/chat.gif";
import marketing from "../assets/promotion.gif";
import idea from "../assets/idea.gif";
import search from "../assets/search.gif";
import brand from "../assets/brand.gif";
import event from "../assets/dev.gif";
function Services() {
  return (
    <div id="services">
      <h2 className="sous-titre">
        <span className="line"> Our Services </span>
      </h2>

      <div className="Container-services">
        <div className="services-elements1">
          <div className="element1>">
            <img src={consult} alt="" className="el-img" />
            <h6>Digital Consulting</h6>
            <p>
              Digital Strategy
              <br />
              Digital Audit
              <br />
              Digital Training
              <br />
              Digital Workshops
              <br />
              Digital Marketing Frameworks
              <br />
              Onboarding Digital Structures
              <br />
            </p>
          </div>

          <div className="element1>">
            <img src={marketing} alt="" className="el-img" />
            <h6>
              Social Media <br />
              Marketing
            </h6>
            <p>
              Social Media Strategy Channel Optimization Content Creation <br />
              Social Media Campaign
              <br />
              Influencer Marketing
              <br />
              Community Management
              <br />
              Social Media Advertising
              <br />
            </p>
          </div>

          <div className="element1>">
            <img src={event} alt="" className="el-img" />
            <h6>Event Management</h6>
            <p>
              UX Services
              <br />
              UI Design
              <br />
              Content Development
              <br />
              Platform Development
              <br />
              Hosting & Management
              <br />
              Maintenance & Support
              <br />
              Marketing Automation
              <br />
            </p>
          </div>
        </div>

        <div className="services-elements2">
          <div className="element1>">
            <img src={search} alt="" className="el-img" />
            <h6>Search Marketing</h6>
            <p>
              SEO Strategy
              <br />
              Keyword Analysis
              <br />
              Technical Optimization
              <br />
              Content Optimization
              <br />
              App Store Optimization
              <br />
              Offsite Optimization
              <br />
              Google My Business Management
              <br />
              SEM
              <br />
            </p>
          </div>

          <div className="element1>">
            <img src={idea} alt="" className="el-img" />
            <h6>Content Creation</h6>
            <p>
              Integrated Campaigns
              <br />
              Content Writing
              <br />
              Content Localization
              <br />
              Articles & Blogs
              <br />
              Design Execution
              <br />
              Animation
              <br />
              Video Production
              <br />
              Photography
              <br />
            </p>
          </div>

          <div className="element1>">
            <img src={brand} alt="" className="el-img" />
            <h6>Branding</h6>
            <p>
              Brand Strategy Identity Branding
              <br />
              Brand Makeover
              <br />
              Brand Guidelines
              <br />
              Messaging Statements
              <br />
              Marketing Collaterals
              <br />
              Newsletters
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
