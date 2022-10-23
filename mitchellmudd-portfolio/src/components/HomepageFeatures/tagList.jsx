import React from 'react'
export default function TagList({ tags }) {
    return (
        <>
            <ul className={'tags_node_modules-@docusaurus-theme-classic-lib-theme-TagsListInline-styles-module padding--none margin-left--sm'}>

                {tags.map((tag, idx) => (
                    <li key={idx} className={'tag_node_modules-@docusaurus-theme-classic-lib-theme-TagsListInline-styles-module'}>

                        <a key={idx} className={'tag_node_modules-@docusaurus-theme-classic-lib-theme-Tag-styles-module tagRegular_node_modules-@docusaurus-theme-classic-lib-theme-Tag-styles-module'}>{tag}</a></li>
                ))}
            </ul>
        </>
    )
}