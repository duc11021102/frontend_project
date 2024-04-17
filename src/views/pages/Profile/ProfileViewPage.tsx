import { useQuery } from "@tanstack/react-query";
import { getProfileGitApi } from "../../../api/getProfileGitApi";
import { getFollowersApi } from "../../../api/getFollowersApi";
import {
  RiGitRepositoryFill,
  RiUserFollowFill,
  RiUserAddFill,
  RiCodeSSlashFill,
} from "react-icons/ri";
import { IUserFollower } from "../../../interface/user";
import { useTitle } from "../../../hooks/useTitle";
const ProfileViewPage = () => {
  //STORE
  useTitle("Profile");
  //QUERY
  const { data: userData } = useQuery({
    queryFn: getProfileGitApi,
    queryKey: ["profile"],
    staleTime: 5000,
  });
  const { data: userFollowers } = useQuery({
    queryFn: getFollowersApi,
    queryKey: ["followers"],
    staleTime: 5000,
  });
  return (
    <main className="mt-20 font-body">
      <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-2xl p-5">
        <img
          className="w-32 h-32 rounded-full object-cover mx-auto"
          src={userData?.avatar_url}
          alt="Profile picture"
        />
        <h2 className="text-center text-2xl font-semibold mt-3">
          {userData?.name}
        </h2>
        <p className="text-center text-gray-600 mt-1">{userData?.location}</p>
        <div className="flex justify-center mt-5">
          <a
            target="black"
            href={userData?.html_url}
            className="text-blue-500 hover:text-blue-700 mx-3"
          >
            Twitter
          </a>
          <a
            target="black"
            href={userData?.html_url}
            className="text-blue-500 hover:text-blue-700 mx-3"
          >
            LinkedIn
          </a>
          <a
            target="black"
            href={userData?.html_url}
            className="text-blue-500 hover:text-blue-700 mx-3"
          >
            GitHub
          </a>
        </div>
        <div className="mt-5">
          <h3 className="text-xl font-semibold">Bio</h3>
          <p className="text-gray-600 mt-2">{userData?.bio}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  mx-5 gap-5">
        <div className="shadow-2xl rounded-lg flex justify-center items-center p-5 gap-5">
          <RiGitRepositoryFill className="text-4xl p-1 bg-black text-white rounded-full" />
          <p className="text-xl font-semibold">
            {userData?.public_repos} Repos
          </p>
        </div>
        <div className="shadow-2xl rounded-lg flex justify-center items-center p-5 gap-5">
          <RiUserFollowFill className="text-4xl p-1 bg-black text-white rounded-full" />
          <p className="text-xl font-semibold">
            {userData?.followers} Followers
          </p>
        </div>
        <div className="shadow-2xl rounded-lg flex justify-center items-center p-5 gap-5">
          <RiUserAddFill className="text-4xl p-1 bg-black text-white rounded-full" />
          <p className="text-xl font-semibold">
            {userData?.following} Following
          </p>
        </div>
        <div className="shadow-2xl rounded-lg flex justify-center items-center p-5 gap-5">
          <RiCodeSSlashFill className="text-4xl p-1 bg-black text-white rounded-full" />
          <p className="text-xl font-semibold">
            {userData?.public_gists} Gists
          </p>
        </div>
      </div>
      <div className="my-10 mx-5 bg-white">
        <div className="max-w-lg rounded-lg shadow-2xl p-5">
          <h1 className="text-xl font-semibold">Followers</h1>
          <ul className="mt-5 flex flex-col gap-2 overflow-y-scroll h-40">
            {userFollowers?.map((user: IUserFollower) => (
              <li key={user.id} className="flex items-center gap-5">
                <img
                  className="w-10 h-10 rounded-full object-cover"
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
