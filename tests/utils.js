//The functions here are used to generate xpath dynamically based on column, title and tagName value

export function xpathCardTitle(column, title) {
    return `//div[@class='CommentOnlyBoardColumn CommentOnlyBoardBody-column'][${column}]/descendant::span[contains(text(),'${title}')]`;
}

export function xpathCardTag(column, title, tagName) {
   
    return `//div[@class='CommentOnlyBoardColumn CommentOnlyBoardBody-column'][${column}]/descendant::span[contains(text(),'${title}')]/ancestor::div[@class='BoardCardLayout BoardCard-layout']/descendant::span[text()='${tagName}']`;
}
