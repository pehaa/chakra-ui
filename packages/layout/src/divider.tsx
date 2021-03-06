import { chakra, forwardRef, HTMLChakraProps } from "@chakra-ui/system"
import { cx, __DEV__ } from "@chakra-ui/utils"
import * as React from "react"

/**
 * Layout component used to visually separate content in a list or group.
 * It display a thin horizontal or vertical line, and renders a `hr` tag.
 *
 * @see Docs https://chakra-ui.com/components/divider
 */
export const Divider = forwardRef<DividerProps, "hr">(function Divider(
  props,
  ref,
) {
  const { className, orientation = "horizontal", __css, ...rest } = props

  const styles = {
    vertical: {
      borderLeftWidth: "1px",
      height: "100%",
    },
    horizontal: {
      borderBottomWidth: "1px",
      width: "100%",
    },
  }

  return (
    <chakra.hr
      ref={ref}
      role="separator"
      aria-orientation={orientation}
      {...rest}
      __css={{
        border: "0",
        opacity: 0.6,
        borderColor: "inherit",
        borderStyle: "solid",
        ...styles[orientation],
        ...__css,
      }}
      className={cx("chakra-divider", props.className)}
    />
  )
})

export interface DividerProps extends HTMLChakraProps<"div"> {
  orientation?: "horizontal" | "vertical"
}

if (__DEV__) {
  Divider.displayName = "Divider"
}
