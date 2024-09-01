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
    title: 'Creador',
    links: [
      { icon: 'linkedin', link: 'https://es.linkedin.com/in/javiercollrodriguez' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Sobre nosotros (en realidad, sobre mí)
    </template>
    <template #lead>
      &lt;/&gt; software con ❤️ y más de 10 años de experiencia.
      <br />
      Desde Barcelona.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>