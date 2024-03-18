import React from 'react';

const SkillImage = ({ src, alt, width, height }) => {
    return (
        <img style={{ width, height }} src={src} alt={alt} />
    );
};

const MySkill = () => {
    const skills = [
        { src: "/src/assets/images/html.png", alt: "HTML", width: "70px", height: "70px" },
        { src: "/src/assets/images/css.png", alt: "CSS", width: "70px", height: "70px" },
        { src: "/src/assets/images/b.png", alt: "Bootstrap", width: "70px", height: "70px" },
        { src: "/src/assets/images/js.png", alt: "JavaScript", width: "70px", height: "70px" },
        { src: "/src/assets/images/c.png", alt: "c", width: "100px", height: "70px" },
        { src: "/src/assets/images/cp.png", alt: "cp", width: "70px", height: "70px" },
        { src: "/src/assets/images/p.png", alt: "python", width: "70px", height: "70px" },
        { src: "/src/assets/images/mysql.png", alt: "mysql", width: "70px", height: "70px" },
        { src: "/src/assets/images/github.png", alt: "github", width: "100px", height: "70px" },
        { src: "/src/assets/images/django.png", alt: "django", width: "100px", height: "100px" },
       
        
        
    ];

    return (
        <section  className="MySkillSection ">
            <h1 className="text-center mb-4">My Experience Skills</h1>
            <div className="mySkill mb-2">
                {skills.map((skill, index) => (
                    <SkillImage key={index} {...skill} />
                ))}
            </div>
        </section>
    );
};

export default MySkill;
