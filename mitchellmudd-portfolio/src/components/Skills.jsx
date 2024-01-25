const favoriteTech = [
    {
        name: "React",
        imageLink:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    },
    {
        name: "Node.js",
        imageLink:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
    },
];

const frontendTech = ["React", "Redux", "React Router"];

const backendTech = ["Node.js", "Express", "PostgreSQL"];

// const toolsILike = ["Git", "GitHub", "VSCode"];

const whatIWantToLearn = ["TypeScript", "GraphQL", "Docker"];

const SkillsList = ({ skills }) => {
    return (
        <div style={{ width: "200px", height: "200px" }}>
            {skills.map((skill, idx) => (
                <>
                    <p key={idx}>{skill.name}</p>
                    <img src={skill.imageLink} alt={skill.name} />
                </>
            ))}
        </div>
    );
};

export const FavoriteSkills = () => {
    return <SkillsList skills={favoriteTech} />;
};

export const FrontendSkills = () => {
    return <SkillsList skills={frontendTech} />;
};

export const BackendSkills = () => {
    return <SkillsList skills={backendTech} />;
};

// export const ToolsILike = () => {
//     return (
//         <SkillsList skills={toolsILike} />
//     )
// }

export const WhatIWantToLearn = () => {
    return <SkillsList skills={whatIWantToLearn} />;
};
