import { Card } from "./Card"

export const Projects = () => {
    return (
        <div className="my-16 px-3 font-sen" id="projects">
            <p className="text-3xl font-bold text-white">Featured Projects</p>
            <p className="text-xl text-gray-300">These are projects I have built alone or with a couple of friends</p>
            <div className="bg-black dark:bg-black">
                <div className="container mx-auto py-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <Card title="Spotify Playlist Mixer" description="Mix your collaborative playlists so that one song per friend is played everytime" image="/together.png" link="https://github.com/Juan-Esc/spotify-playlist-mixer" />
                        <Card title="Pick'Em" description="Website to predict match results, share them and compete in the ranking" image="/pickem.png" />
                        <Card title="Padel Club" description="A class reservation webapp for padel clubs" image="/padelclub.png" />
                        <Card title="Game Server Panel" description="A website for creating and managing game servers. Game servers run on isolated Docker instances." image="/serverpanel.png" />
                    </div>
                </div>
            </div>
        </div>
    );
};
