import React, { Fragment } from 'react'
import type { LexicalContent, LexicalNode, LexicalTextNode, LexicalElementNode } from '@/types/kinderyoga'

function isTextNode(node: LexicalNode): node is LexicalTextNode {
  return node.type === 'text'
}

function SerializeNode({ node }: { node: LexicalNode }): React.ReactNode {
  if (isTextNode(node)) {
    let content: React.ReactNode = node.text

    if (node.format & 1) content = <strong>{content}</strong>
    if (node.format & 2) content = <em>{content}</em>
    if (node.format & 8) content = <u>{content}</u>
    if (node.format & 4) content = <s>{content}</s>

    return content
  }

  const el = node as LexicalElementNode
  const children = el.children?.map((child, i) => (
    <Fragment key={i}>
      <SerializeNode node={child} />
    </Fragment>
  ))

  switch (el.type) {
    case 'paragraph':
      return <p>{children}</p>
    case 'heading':
      if (el.tag === 'h1') return <h1>{children}</h1>
      if (el.tag === 'h2') return <h2>{children}</h2>
      if (el.tag === 'h3') return <h3>{children}</h3>
      return <h4>{children}</h4>
    case 'list':
      return el.listType === 'bullet' ? <ul>{children}</ul> : <ol>{children}</ol>
    case 'listitem':
      return <li>{children}</li>
    default:
      return <>{children}</>
  }
}

interface SerializeLexicalProps {
  content: LexicalContent
  className?: string
}

export function SerializeLexical({ content, className }: SerializeLexicalProps) {
  if (!content?.root?.children) return null

  return (
    <div className={className}>
      {content.root.children.map((node, i) => (
        <Fragment key={i}>
          <SerializeNode node={node} />
        </Fragment>
      ))}
    </div>
  )
}
