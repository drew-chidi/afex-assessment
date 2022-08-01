import React from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
} from "@chakra-ui/react";

const ProgressStep = ({ value }) => {
  return (
    <div style={{ marginBottom: "14px", fontWeight: 700 }}>
      <p>{`${value}/4`}</p>
      <Slider defaultValue={value} min={0} max={4} step={1} isReadOnly>
        <SliderTrack bg='red.100'>
          <Box position='relative' right={10} />
          <SliderFilledTrack bg='tomato' />
        </SliderTrack>
        <SliderThumb boxSize={4} />
      </Slider>
    </div>
  );
};

export default ProgressStep;
