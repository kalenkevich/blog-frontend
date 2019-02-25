/* eslint-disable max-len */
import { mockPosts } from '../main/MainPageService';

const user = {
  id: 'user0',
  name: 'Test User',
  avatarUrl: 'https://via.placeholder.com/150',
  description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in mauris rhoncus, malesuada erat ut, blandit augue. Suspendisse aliquet nisi nec rhoncus mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel elit id orci faucibus luctus nec vitae odio. In viverra quam mauris, volutpat tincidunt enim ullamcorper eget. Donec dapibus facilisis ex non rutrum. Quisque dignissim facilisis risus sed imperdiet. Vivamus aliquet vestibulum aliquet. Suspendisse sodales lectus sed nisi consectetur, sit amet consequat quam fermentum. Duis sodales tempor odio, non dictum lacus elementum in. Duis ut augue dictum, cursus lorem a, faucibus turpis. Sed sollicitudin eget risus eget dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    Proin luctus augue a euismod placerat. Mauris pellentesque dignissim odio, eget rutrum ligula. Nullam at ante non est rutrum pretium at quis ligula. Etiam ornare at urna non blandit. Nullam hendrerit volutpat luctus. Suspendisse porttitor tellus consectetur gravida porta. Aliquam porttitor tortor arcu, non tincidunt odio fermentum ut. Morbi congue elit at nulla porttitor, in semper est posuere. Aliquam erat volutpat. Fusce mollis nec libero quis pretium. Nunc vitae tempor sem, vitae molestie justo. Vivamus purus libero, dictum non efficitur nec, volutpat ac felis. Nulla id dolor non erat efficitur vestibulum at eu sem. Donec at porta sem, nec ultrices felis.
    Curabitur efficitur quam vel lobortis vestibulum. Nunc id orci nunc. Cras egestas arcu at mi vestibulum, non blandit nisi volutpat. Donec et lacinia dolor. In ut aliquam mauris. Donec tempor eu neque sed mollis. Pellentesque porttitor erat id egestas rutrum. Pellentesque id ultrices massa, eu fermentum odio.
  `,
  rate: 5,
};

export const getUser = () => Promise.resolve(user);

export const getUserAndPosts = async () => {
  const [
    user1,
    posts,
  ] = await Promise.all([
    Promise.resolve(user),
    Promise.resolve(mockPosts),
  ]);

  return {
    user: user1,
    posts,
  };
};
