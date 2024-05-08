---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: '/javiercoll.jpg',
    name: 'Javier Coll',
    title: 'Creator',
    links: [
      { icon: 'linkedin', link: 'https://es.linkedin.com/in/javiercollrodriguez' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      About us (actually, just me)
    </template>
    <template #lead>
      &lt;/&gt; software with ❤️ with more than 10 years of experience.
      <br />
      Based in Barcelona.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>