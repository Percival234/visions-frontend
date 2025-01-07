import type { Metadata } from 'next';

import type { PageProps } from '@/types/utils/page-props.type';

import { CenteredContainer } from '@/ui/centered-container';

import { ProfileAwards } from '@/components/profile/profile-awards';
import { ProfileClubs } from '@/components/profile/profile-clubs';
import { ProfileFollowers } from '@/components/profile/profile-followers';
import { ProfileGallery } from '@/components/profile/profile-gallery';
import { ProfileInfo } from '@/components/profile/profile-info';
import { ProfilePosts } from '@/components/profile/profile-posts';

import { usersService } from '@/services/api-services/users/users.service';

// TODO implement correct metadata

// export async function generateMetadata({
//   params,
// }: GenerateMetadataProps): Promise<Metadata> {
//   const user = await usersService.getById((await params).id);
//   return {
//     title: user.username,
//     description: `Досліджуйте профіль користувача ${user.username}`,
//   };
// }

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return (
    <CenteredContainer className="grid grid-cols-5">
      <div className="col-span-5">
        <ProfileInfo userId={id} />
      </div>
      <div className="flex flex-col gap-5 col-span-2">
        <ProfileFollowers userId={id} />
        <ProfileClubs userId={id} />
        <ProfileAwards userId={id} />
      </div>
      <div className="flex flex-col gap-5 col-span-3">
        <ProfileGallery userId={id} />
        <ProfilePosts userId={id} />
      </div>
    </CenteredContainer>
  );
}
