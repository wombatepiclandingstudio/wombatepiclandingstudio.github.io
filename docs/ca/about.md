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
      Sobre nosaltres (en realidtat, sobre mí)
    </template>
    <template #lead>
      &lt;/&gt; software amb ❤️ i més de 10 anys d'experiència.
      <br />
      Desde Barcelona.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>