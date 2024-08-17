import React from 'react';
import { Header, List } from 'semantic-ui-react';

const WCT_IMPORTANT_LINKS = [
  {
    title: 'WR Submission Form',
    link: 'https://docs.google.com/forms/d/1-PhgIj-OCANKTtMtJwYrtYFOgAjIOrE5yo_cMnmF5xI/edit',
  },
  {
    title: 'Instagram Hosting Form',
    link: 'https://docs.google.com/forms/d/11zbKPnhZI70pl2_NCrTGMgZ_CmvLTiquuP5TIm_P_mI/edit',
  },
  {
    title: 'Media Submission Form',
    link: 'https://docs.google.com/forms/d/1bS5K_Ou0W0e7x_x6XKsS5n80kE1TVfKSakcAU33_cJc/edit',
  },
  {
    title: 'WR History',
    link: 'https://www.worldcubeassociation.org/results/records?show=mixed+history',
  },
];

function ListItemLink({ title, link }) {
  return (
    <List.Item>
      <a href={link} target="_blank" rel="noreferrer">{title}</a>
    </List.Item>
  );
}

export default function ImportantLinks() {
  return (
    <>
      <Header as="h2">Important Links</Header>
      <List>
        {IMPORTANT_LINKS.map(({ title, link }) => (
          <ListItemLink key={link} title={title} link={link} />
        ))}
      </List>
    </>
  );
}
