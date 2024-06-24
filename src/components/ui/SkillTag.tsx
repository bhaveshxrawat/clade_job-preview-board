type Tag = {
    logo: string;
    skillName: string;
};

const SkillTag = ({ logo, skillName }: Tag) => {
    return (
        <figure className="flex items-center p-[4px_6px] gap-1 bg-white border border-[#D0D5DD] shadow-[inset_0px_4px_4px_rgba(0,0,0,0.08)] rounded-md">
            <img
                width={16}
                height={16}
                src={`/skills/${logo}`}
                alt={skillName}
            />
            <figcaption className="text-[#344054] text-xs leading-[1.5]">
                {skillName}
            </figcaption>
        </figure>
    );
};

export default SkillTag;
