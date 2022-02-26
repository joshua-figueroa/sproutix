import { Button as MaterialButton, FormControl, MenuItem, Select } from '@mui/material';
import Header from 'components/Header';

import "styles/app.scss"
import { dummyEvents } from 'helpers/data';
import Card from 'components/Card';
import FooterLink from 'components/FooterLink';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import visalogo from "assets/visa.jpeg"
import mastercardlogo from "assets/mastercard.jpeg"
import CustomCarousel from 'components/Carousel';
import SearchBox from 'components/SearchBox';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const App = () => {
  return (
    <div className='app'>
      <div className='main'>
        <Header />
        <div className='carousel-container'>
          <CustomCarousel />
          <SearchBox />
        </div>

        <div className="main-section">
          <div className="title-section d-flex align-items-center justify-content-between">
            <h2>Upcoming Events</h2>
            <div className='filter-buttons d-flex align-items-center'>
              <FormControl variant="filled">
                <Select
                  value="weekdays"
                  IconComponent={ExpandMoreIcon}
                >
                  <MenuItem value="weekends">Weekends</MenuItem>
                  <MenuItem value="weekdays">Weekdays</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="filled">
                <Select
                  value="event_type"
                  IconComponent={ExpandMoreIcon}
                >
                  <MenuItem value="event_type">Event Type</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="filled">
                <Select
                  value="any"
                  IconComponent={ExpandMoreIcon}
                >
                  <MenuItem value="any">Any Category</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          <div className='events-section'>
            {dummyEvents.map(event => (
              <Card key={event.title} {...event} />
            ))}
          </div>

          <div className='events-more d-flex justify-content-center'>
            <MaterialButton variant="contained">Load More Events</MaterialButton>
          </div>
        </div>
      </div>
      <div className='footer'>
        <div className='footer-body'>
          <div className='footer-column'>
            <FooterLink className='column-title'>Product</FooterLink>
            <FooterLink className='column-text'>Key Features</FooterLink>
            <FooterLink className='column-text'>Pricing</FooterLink>
            <FooterLink className='column-text'>Event Ticketing</FooterLink>
            <FooterLink className='column-text'>Booking</FooterLink>
            <FooterLink className='column-text'>Online Promotion</FooterLink>
            <FooterLink className='column-text'>Developers</FooterLink>
          </div>
          <div className='footer-column'>
            <FooterLink className='column-title'>Explore Now</FooterLink>
            <FooterLink className='column-text'>How it Work</FooterLink>
            <FooterLink className='column-text'>Download App</FooterLink>
            <FooterLink className='column-text'>Event Promoter</FooterLink>
            <FooterLink className='column-text'>Sell Tickets</FooterLink>
            <FooterLink className='column-text'>Event Organizer</FooterLink>
            <FooterLink className='column-text'>Nonprofits & Fundraisers</FooterLink>
          </div>
          <div className='footer-column'>
            <FooterLink className='column-title'>Connect With Us</FooterLink>
            <FooterLink className='column-text'>Customer Support</FooterLink>
            <FooterLink className='column-text'>Download App</FooterLink>
            <FooterLink className='column-text'>Event Promoter</FooterLink>
            <FooterLink className='column-text'>
              <Facebook fontSize='small' />&nbsp;Facebook
            </FooterLink>
            <FooterLink className='column-text'><Twitter fontSize='small' />&nbsp;Twitter</FooterLink>
            <FooterLink className='column-text'><Instagram fontSize='small' />&nbsp;Instagram</FooterLink>
          </div>
          <div className='footer-column'>
            <FooterLink className='column-title'>Payment Available</FooterLink>
            <div className='d-flex align-items-center'>
              <img src={visalogo} alt="Visa" />
              <img src={mastercardlogo} alt="Mastercard" />
            </div>
            <div className='d-flex align-items-center'>
              <img src={visalogo} alt="Visa" />
              <img src={mastercardlogo} alt="Mastercard" />
            </div>
          </div>
        </div>
        <div className='footer-note d-flex justify-content-center'>
          Copyright 2019 Eventbux.com. LLC. All rights reserved. Equal Housing Opportunity
        </div>
      </div>
    </div>
  )
}

export default App;
