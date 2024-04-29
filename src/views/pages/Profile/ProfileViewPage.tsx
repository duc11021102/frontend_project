import { useQuery } from "@tanstack/react-query";
import { getProfileGitApi } from "../../../api/getProfileGitApi";
import { getFollowersApi } from "../../../api/getFollowersApi";
import { getFollowingApi } from "../../../api/getFollowingApi";
import {
  RiGitRepositoryFill,
  RiUserFollowFill,
  RiUserAddFill,
  RiCodeSSlashFill,
} from "react-icons/ri";
import { IUserFollower, IUserFollowing } from "../../../interface/user";
import { useTitle } from "../../../hooks/useTitle";
const ProfileViewPage = () => {
  //STORE
  useTitle("Profile");
  // GET PROFILE GIT API
  const { data: userData } = useQuery({
    queryFn: getProfileGitApi,
    queryKey: ["profile"],
    staleTime: 5000,
  });
  // GET FOLLOWERS API
  const { data: userFollowers } = useQuery({
    queryFn: getFollowersApi,
    queryKey: ["followers"],
    staleTime: 5000,
  });
  // GET FOLLOWING API
  const { data: userFollowing } = useQuery({
    queryFn: getFollowingApi,
    queryKey: ["following"],
    staleTime: 5000,
  });

  return (
    <main className="mt-20 font-body">
      <div className="max-w-lg mx-auto my-10 bg-white card">
        <img
          className="w-32 h-32 img_profile mx-auto"
          src={userData?.avatar_url}
          alt="Profile picture"
        />
        <h2 className="text_title text-center mt-3">{userData?.name}</h2>
        <p className="text-center mt-1">{userData?.location}</p>
        <div className="container_flex mt-5">
          <a target="black" href={userData?.html_url} className="link_blue">
            Twitter
          </a>
          <a target="black" href={userData?.html_url} className="link_blue">
            LinkedIn
          </a>
          <a target="black" href={userData?.html_url} className="link_blue">
            GitHub
          </a>
        </div>
        <div className="mt-5">
          <h3 className="text_section">Bio</h3>
          <p className="mt-2">{userData?.bio}</p>
        </div>
      </div>
      <div className="container_grid4 gap-5 mx-5 ">
        <div className="card container_flex gap-5">
          <RiGitRepositoryFill className="icon_profile" />
          <p className="text_section">{userData?.public_repos} Repos</p>
        </div>
        <div className="card container_flex gap-5">
          <RiUserFollowFill className="icon_profile" />
          <p className="text_section">{userData?.followers} Followers</p>
        </div>
        <div className="card container_flex gap-5">
          <RiUserAddFill className="icon_profile" />
          <p className="text_section">{userData?.following} Following</p>
        </div>
        <div className="card container_flex gap-5">
          <RiCodeSSlashFill className="icon_profile" />
          <p className="text_section">{userData?.public_gists} Gists</p>
        </div>
      </div>
      <div className="my-10 mx-5 bg-white container_grid3">
        <div className="card">
          <h1 className="text_section">Followers</h1>
          <ul className=" ul_list h-40 mt-5">
            {userFollowers?.map((user: IUserFollower) => (
              <li key={user.id} className="flex items-center gap-5">
                <img
                  className="w-10 h-10 img_profile"
                  src={user.avatar_url}
                ></img>
                <div className="flex flex-col">
                  <p className="font-semibold">{user.login}</p>
                  <a href={user.html_url} target="blank">
                    {user.html_url}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h1 className="text_section">Followers</h1>
          <ul className=" ul_list h-40 mt-5">
            {userFollowing?.map((user: IUserFollowing) => (
              <li key={user.id} className="flex items-center gap-5">
                <img
                  className="w-10 h-10 img_profile"
                  src={user.avatar_url}
                ></img>
                <div className="flex flex-col">
                  <p className="font-semibold">{user.login}</p>
                  <a href={user.html_url} target="blank">
                    {user.html_url}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};
export default ProfileViewPage;
