import React from 'react';

export default function Header() {
    return (
        <div>
            <header className="bg-purple-300 flex flex-row items-center h-12 space-between">
                <div className="flex flex-row items-center divide-x divide-purple-200">
                    <a className="px-3" href="/">Accueil</a>
                    <a className="px-3" href="/leaderboard">Leaderboard</a>
                </div>
                <div className="flex flex-row items-center">
                    <a className="px-3" href="/profile">Profil</a>
                    <img className="px-3" src="" alt="Pdp profil" />
                </div>
            </header>
        </div>
    );
}