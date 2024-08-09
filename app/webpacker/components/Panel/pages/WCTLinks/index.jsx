import React from 'react';
import { Header, List } from 'semantic-ui-react';

const IMPORTANT_WCT_LINKS = [
  {
    title: 'WR Submission Form',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSeLrkLhFnIy1QNGoWoZT4jsOIibNJ_xc9qTd_YKBpcuMIq-LA/viewform',
  },
  {
    title: 'Instagram Hosting Form',
    link: 'https://docs.google.com/forms/d/11zbKPnhZI70pl2_NCrTGMgZ_CmvLTiquuP5TIm_P_mI',
  },
  {
    title: 'Instagram Media Submission Form',
    link: 'https://docs.google.com/forms/d/1bS5K_Ou0W0e7x_x6XKsS5n80kE1TVfKSakcAU33_cJc',
  },
];

function ListItemLink({ title, link }) {
  return (
    <List.Item>
      <a href={link} target="_blank" rel="noreferrer">{title}</a>
    </List.Item>
  );
}

export default function WCTLinks() {
  return (
    <>
      <Header as="h2">Important WCT Links</Header>
      <List>
        {IMPORTANT_WCT_LINKS.map(({ title, link }) => (
          <ListItemLink key={link} title={title} link={link} />
        ))}
      </List>
    </>
  );
}
