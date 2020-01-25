import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header-left">
          <img alt="{caption}" className="header-logo" src="https://ebi.emblstatic.net/web_guidelines/EBI-Framework/v1.3/images/logos/EMBL-EBI/EMBL_EBI_Logo_white.svg" />
          <span className="header-text">Persons Management</span>
        </div>

      </div>
    );
  }
}
