import type { Meta, StoryObj } from '@storybook/react-vite';
import { designTokens } from '../../config/design-tokens';

const ColorPalette = () => {
  const renderColorGroup = (groupName: string, colors: Record<string, string>) => (
    <div key={groupName} style={{ marginBottom: '32px' }}>
      <h3 style={{ 
        fontSize: '20px', 
        fontWeight: '600', 
        marginBottom: '16px', 
        color: '#222729',
        textTransform: 'capitalize'
      }}>
        {groupName}
      </h3>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
        gap: '16px' 
      }}>
        {Object.entries(colors).map(([shade, color]) => (
          <div key={`${groupName}-${shade}`} style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center' 
          }}>
            <div
              style={{ 
                width: '64px', 
                height: '64px', 
                backgroundColor: color,
                borderRadius: '8px',
                border: '1px solid #E7EDF0',
                boxShadow: '0 1px 3px 0 rgba(23, 23, 25, 0.1)',
                marginBottom: '8px'
              }}
            />
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '12px', 
                fontWeight: '500', 
                color: '#222729',
                marginBottom: '2px'
              }}>
                {groupName}-{shade}
              </div>
              <div style={{ 
                fontSize: '12px', 
                color: '#5E696E',
                fontFamily: 'monospace'
              }}>
                {color}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSingleColor = (name: string, color: string) => (
    <div key={name} style={{ marginBottom: '32px' }}>
      <h3 style={{ 
        fontSize: '20px', 
        fontWeight: '600', 
        marginBottom: '16px', 
        color: '#222729',
        textTransform: 'capitalize'
      }}>
        {name}
      </h3>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        width: 'fit-content'
      }}>
        <div
          style={{ 
            width: '64px', 
            height: '64px', 
            backgroundColor: color,
            borderRadius: '8px',
            border: '1px solid #E7EDF0',
            boxShadow: '0 1px 3px 0 rgba(23, 23, 25, 0.1)',
            marginBottom: '8px'
          }}
        />
        <div style={{ textAlign: 'center' }}>
          <div style={{ 
            fontSize: '12px', 
            fontWeight: '500', 
            color: '#222729',
            marginBottom: '2px'
          }}>
            {name}
          </div>
          <div style={{ 
            fontSize: '12px', 
            color: '#5E696E',
            fontFamily: 'monospace'
          }}>
            {color}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ 
      padding: '24px', 
      backgroundColor: '#FFFFFF',
      minHeight: '100vh'
    }}>
      <h1 style={{ 
        fontSize: '28px', 
        fontWeight: '700', 
        marginBottom: '32px', 
        color: '#222729'
      }}>
        SATTO Color System
      </h1>
      <p style={{ 
        fontSize: '16px', 
        color: '#5E696E', 
        marginBottom: '48px',
        maxWidth: '600px'
      }}>
        Figma 디자인 시스템을 기반으로 한 색상 팔레트입니다.
      </p>

      {/* Common Colors */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '32px', 
        marginBottom: '48px'
      }}>
        {renderSingleColor('Black', designTokens.colors.black)}
        {renderSingleColor('White', designTokens.colors.white)}
      </div>

      {/* Color Groups */}
      {renderColorGroup('Gray', designTokens.colors.gray)}
      {renderColorGroup('Primary', designTokens.colors.primary)}
      {renderColorGroup('Purple', designTokens.colors.purple)}
      {renderColorGroup('Orange', designTokens.colors.orange)}
      {renderColorGroup('Yellow', designTokens.colors.yellow)}
      {renderColorGroup('Green', designTokens.colors.green)}
      {renderColorGroup('Blue', designTokens.colors.blue)}

      {/* Overlay Colors */}
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ 
          fontSize: '20px', 
          fontWeight: '600', 
          marginBottom: '16px', 
          color: '#222729'
        }}>
          Overlay
        </h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
          gap: '16px' 
        }}>
          {Object.entries(designTokens.colors.overlay).map(([opacity, color]) => (
            <div key={`overlay-${opacity}`} style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center' 
            }}>
              <div
                style={{ 
                  width: '64px', 
                  height: '64px', 
                  borderRadius: '8px',
                  border: '1px solid #E7EDF0',
                  boxShadow: '0 1px 3px 0 rgba(23, 23, 25, 0.1)',
                  marginBottom: '8px',
                  backgroundColor: '#F7F9FA',
                  position: 'relative'
                }}
              >
                <div
                  style={{ 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: '8px',
                    backgroundColor: color
                  }}
                />
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  fontSize: '12px', 
                  fontWeight: '500', 
                  color: '#222729',
                  marginBottom: '2px'
                }}>
                  overlay-{opacity}
                </div>
                <div style={{ 
                  fontSize: '12px', 
                  color: '#5E696E',
                  fontFamily: 'monospace'
                }}>
                  {opacity}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const meta: Meta<typeof ColorPalette> = {
  title: 'Design System/Color System',
  component: ColorPalette,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'SATTO 프로젝트의 전체 색상 시스템을 보여줍니다. Figma 디자인 시스템을 기반으로 구성되었습니다.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ColorPalette>;

export const Default: Story = {
  args: {},
};

// 개별 색상 그룹 스토리들
export const GrayScale: Story = {
  render: () => (
    <div style={{ 
      padding: '24px', 
      backgroundColor: '#FFFFFF',
      minHeight: '100vh'
    }}>
      <h2 style={{ 
        fontSize: '24px', 
        fontWeight: '700', 
        marginBottom: '24px', 
        color: '#222729'
      }}>Gray Scale</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
        gap: '16px' 
      }}>
        {Object.entries(designTokens.colors.gray).map(([shade, color]) => (
          <div key={shade} style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center' 
          }}>
            <div
              style={{ 
                width: '80px', 
                height: '80px', 
                backgroundColor: color,
                borderRadius: '8px',
                border: '1px solid #E7EDF0',
                boxShadow: '0 1px 3px 0 rgba(23, 23, 25, 0.1)',
                marginBottom: '12px'
              }}
            />
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '14px', 
                fontWeight: '500', 
                color: '#222729',
                marginBottom: '4px'
              }}>
                gray-{shade}
              </div>
              <div style={{ 
                fontSize: '12px', 
                color: '#5E696E',
                fontFamily: 'monospace'
              }}>
                {color}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const PrimaryColors: Story = {
  render: () => (
    <div style={{ 
      padding: '24px', 
      backgroundColor: '#FFFFFF',
      minHeight: '100vh'
    }}>
      <h2 style={{ 
        fontSize: '24px', 
        fontWeight: '700', 
        marginBottom: '24px', 
        color: '#222729'
      }}>Primary Red</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
        gap: '16px' 
      }}>
        {Object.entries(designTokens.colors.primary).map(([shade, color]) => (
          <div key={shade} style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center' 
          }}>
            <div
              style={{ 
                width: '80px', 
                height: '80px', 
                backgroundColor: color,
                borderRadius: '8px',
                border: '1px solid #E7EDF0',
                boxShadow: '0 1px 3px 0 rgba(23, 23, 25, 0.1)',
                marginBottom: '12px'
              }}
            />
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '14px', 
                fontWeight: '500', 
                color: '#222729',
                marginBottom: '4px'
              }}>
                primary-{shade}
              </div>
              <div style={{ 
                fontSize: '12px', 
                color: '#5E696E',
                fontFamily: 'monospace'
              }}>
                {color}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};
