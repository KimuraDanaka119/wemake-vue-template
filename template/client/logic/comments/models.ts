// This is a definition of domain model for `comments` context.

import * as ts from 'io-ts'

// Runtime type, that can be used for schema validation:
export const RawComment = ts.type({
  'id': ts.number,
  'body': ts.string,
  'email': ts.string,
})

// Static TypeScript type, that can be used as a regular `type`:
export type RawCommentType = ts.TypeOf<typeof RawComment>
